import { inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

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

    delete(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id).pipe()
    }
}