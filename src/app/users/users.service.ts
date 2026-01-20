import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "../core/interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)
  private _searchStr = signal('')
  searchStr = this._searchStr.asReadonly()
  readonly url = 'https://jsonplaceholder.typicode.com/users'

  private _users =  signal<User[]>([]);
  users = this._users.asReadonly()
  usersSearched = computed(() => {
    return  this.users().filter(user => user.name.includes(this.searchStr()))
  })

  setSearch(str: string) {
    this._searchStr.set(str)
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((usersList) => {
        this._users.set(usersList)
      })
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id)
  }
}