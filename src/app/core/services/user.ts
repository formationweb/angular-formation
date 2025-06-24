import { inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

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

    delete(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id)
    }
}