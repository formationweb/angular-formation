import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';

export type UserPayload = {
  email: string
  name: string
  username?: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)
  private _nameSearched = signal('')
  readonly url = 'https://jsonplaceholder.typicode.com/users'

  nameSearched = this._nameSearched.asReadonly()
  users = signal<User[]>([])
  usersFiltered = computed(() => {
    return this.users().filter(user => user.name.includes(this.nameSearched()))
  })

  setNameSearched(str: string) {
    this._nameSearched.set(str)
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((resUsers) => {
         this.users.set(resUsers)
      })
    )
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id)
  }

  update(id: number, payload: UserPayload): Observable<User> {
    return this.http.put<User>(this.url + '/' + id, payload).pipe(
      tap((userModified) => {
        this.users.set(
          this.users().map(user => user.id == id ? userModified : user)
        )
      })
    )
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((userCreated) => {
         this.users.set([
          ...this.users(),
          userCreated
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
