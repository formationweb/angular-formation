import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "../core/interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export type UserCreatePayload = {
  email: string
  name: string
}

@Injectable({
    providedIn: 'root'
})
export class UsersModel {
    private http = inject(HttpClient)
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    searchName = signal('')
    users = signal<User[]>([]);
    usersSearch = computed(() => {
      return this.users().filter(user => user.name.includes(this.searchName()))
    })

    setSearchName(val: string) {
      this.searchName.set(val)
    }

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(this.url).pipe(
        tap((usersList) => {
          this.users.set(usersList)
        })
      )
    }

    get(id: number): Observable<User> {
      return this.http.get<User>(this.url + '/' + id)
    }

    create(data: UserCreatePayload): Observable<User> {
      return this.http.post<User>(this.url, data).pipe(
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
          const usersList = this.users().filter(user => user.id != id)
          this.users.set(usersList)
        })
      )
    }
}