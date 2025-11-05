import { inject, Injectable, signal } from "@angular/core";
import { User } from "../core/interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export type UserUpdatePayload = {
  name: string
  username: string
  email: string
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private http = inject(HttpClient)
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    users = signal<User[]>([])

    loadUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.url).pipe(
        tap((usersList) => {
          this.users.set(usersList)
        })
      )
    }

    getUser(id: number): Observable<User> {
      return this.http.get<User>(this.url + '/' + id)
    }

    createUser(payload: { email: string, name: string }): Observable<User> {
      return this.http.post<User>(this.url, payload).pipe(
        tap((userCreated) => {
          this.users.set([
            ...this.users(),
            userCreated
          ])
        })
      )
    } 

    updateUser(id: number, payload: UserUpdatePayload): Observable<User> {
      return this.http.put<User>(this.url + '/' + id, payload)
    }

    deleteUser(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id).pipe(
        tap(() => {
          this.users.set(
           this.users().filter(user => user.id != id)
          )
        })
      )
    }
}