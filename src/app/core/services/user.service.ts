import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, lastValueFrom } from "rxjs";
import { User } from "../interfaces/user";

type UserPayload = Omit<User, 'id'>

@Injectable({
    providedIn: 'root' // tree-shaking
})
export class UserService {
    readonly url: string = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) {}

    getAll(): Promise<User[]> {
        /*return new Promise((resolve, reject) => {
            this.http.get<User[]>(this.url).subscribe({
                next: (users: User[]) => {
                    resolve(users)
                },
                error: reject
            })
        })*/
        return lastValueFrom(this.http.get<User[]>(this.url))
    }

    create(payload: UserPayload): Observable<User> {
        return this.http.post<User>(this.url, payload)
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(this.url + '/' + id)
    }
}