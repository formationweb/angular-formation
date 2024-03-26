import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

type UserPayload = Omit<User, 'id'>

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  userNameSearched = signal('');
  userNameUppercase = computed(() => this.userNameSearched().toUpperCase());
  users = signal<User[]>([]);
  usersFiltered = computed(() =>
    this.users().filter((user) => user.name.includes(this.userNameSearched()))
  );

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users: User[]) => {
        this.users.set(users);
      })
    );
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user: User) => {
        this.users.set([ ...this.users(), user ])
      })
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id)
  }
}
