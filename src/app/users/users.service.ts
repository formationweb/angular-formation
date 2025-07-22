import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "../core/interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

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
}