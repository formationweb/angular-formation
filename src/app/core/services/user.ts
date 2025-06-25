import { inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export type UserPayload = { name: string, email: string }
export type UserUpdatePayload = UserPayload & { username: string }

@Injectable({
    providedIn: 'root'
})
export class UserModel {
    private http = inject(HttpClient)
    readonly url = 'https://jsonplaceholder.typicode.com/users'
    users = signal<User[]>([]);

    fetchAll(): Observable<User[]> {
      return this.http.get<User[]>(this.url).pipe(
        tap((listUsers) => {
           this.users.set(listUsers)
        })
      )
    }

    get(id: number) {
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
            this.users.set(
              this.users().filter(user => user.id != id)
            )
        })
      )
    }
}