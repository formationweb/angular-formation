import { computed, inject, Injectable, signal } from "@angular/core";
import { UserModel } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private http = inject(HttpClient)
    private searchValue = signal('')
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    users = signal<UserModel[]>([])
    usersSearch = computed(() => {
      return this.users().filter(user => user.name.includes(this.searchValue()))
    })

    setSearch(val: string) {
      this.searchValue.set(val)
    }

    getAll(): Observable<UserModel[]> {
      return this.http.get<UserModel[]>(this.url).pipe(
        tap((resUsers) => {
          this.users.set(resUsers)
        })
      )
    }
}