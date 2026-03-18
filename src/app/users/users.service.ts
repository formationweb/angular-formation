import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "./user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  readonly url = 'https://jsonplaceholder.typicode.com/users'
  users = signal<User[]>([]);
  private _userNameSearched = signal('')
  readonly userNameSearched = this._userNameSearched.asReadonly()

  usersSearched = computed(() => {
    return this.users().filter(user => user.name.includes(this.userNameSearched()))
  })

  setNameSearch(name: string) {
     this._userNameSearched.set(name)
  }

  getAll(): Observable<User[]> {
     return this.http.get<User[]>(this.url).pipe(
       tap((usersList) => {
          this.users.set(usersList)
       })
     )
  }

  get(id: number) {
    return this.http.get<User>(this.url + '/' + id)
  }

  delete(id: number) {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      tap(() => {
         this.users.set(
           this.users().filter(user => user.id != id)
         )
      })
    )
  }
}