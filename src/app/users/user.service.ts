import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "./user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export type UserPayload = { name: string, email: string }
export type UserEditPayload = UserPayload & { username: string }

@Injectable({
    providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)
  readonly url = 'https://jsonplaceholder.typicode.com/users'

  users = signal<User[]>([]);
  userSearch = signal('')
  usersSearched = computed(() => {
    return this.users().filter(user => user.name.includes(this.userSearch()))
  })

  setSearch(str: string) {
    this.userSearch.set(str)
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id)
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this.users.set(users)
      })
    )
  }

  update(id: number, payload: UserEditPayload): Observable<User> {
    return this.http.put<User>(this.url + '/' + id, payload)
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user) => {
        this.users.set([
          ...this.users(),
          user
        ])
      })
    )
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