import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "./user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient)
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    users = signal<User[]>([])
    nameSearch = signal('')
    usersSearched = computed(() => {
      return this.users().filter(user => user.name.includes(this.nameSearch()))
    })

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(this.url).pipe(
        tap((users) => {
          this.users.set(users)
        })
      )
    }
}