import { inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export type UserPayload = { name: string, email: string }
export type UserUpdatePayload = UserPayload & { username: string }

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient)
    url = 'https://jsonplaceholder.typicode.com/users'

    users = signal<User[]>([])

    getAll(): Observable<User[]> {
       return this.http.get<User[]>(this.url).pipe(
         tap((usersData) => {
            this.users.set(usersData)
         })
       )
    }

    get(id: number): Observable<User> {
      return this.http.get<User>(this.url + '/' + id)
    }

    create(payload: UserPayload): Observable<User> {
      return this.http.post<User>(this.url, payload).pipe(
        tap((userCreated) => {
          this.users.set([ ...this.users(), userCreated ])
        })
      )
    }

    update(id: number, payload: UserUpdatePayload): Observable<User> {
      return this.http.put<User>(this.url + '/' + id, payload)
    }

    delete(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id).pipe(
        tap(() => {
          const usersFiltered = this.users().filter(user => user.id != id)
          this.users.set(usersFiltered)
        })
      )
    }
}