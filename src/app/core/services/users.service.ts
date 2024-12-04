import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export interface UserPayload {
  email: string
  name: string
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private http = inject(HttpClient)
    private _users = signal<User[]>([])
    private _strSearch = signal('')
    readonly url = 'https://jsonplaceholder.typicode.com/users'
    users = this._users.asReadonly()
    usersFiltered = computed(() => {
      return this.users().filter(user => user.name.includes(this._strSearch()))
    })
    
    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
          .pipe(
            tap((usersList) => {
               this._users.set(usersList)
            })
          )
    }

    create(payload: UserPayload): Observable<User> {
      return this.http.post<User>(this.url, payload)
        .pipe(
          tap((userCreated) => {
            this._users.set([
              ...this.users(),
              userCreated
            ])
          })
        )
    }

    delete(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id)
        .pipe(
          tap(() => {
            this._users.set(
              this.users().filter(user => user.id != id)
            )
          })
        )
    }

    setStrSearch(name: string) {
      this._strSearch.set(name)
    }
}