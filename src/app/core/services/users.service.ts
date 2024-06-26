import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export type UserPayload = Omit<User, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);

  private _users = signal<User[]>([]);
  private _search = signal('');
  users = this._users.asReadonly();
  search = this._search.asReadonly();
  usersFiltered: Signal<User[]> = computed(() => {
    return this.users().filter((user) => user.name.includes(this.search()));
  });

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this._users.set(users);
      })
    );
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id)
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user) => {
        this._users.set([...this.users(), user]);
        // this._users.update(users => [...users, user])
      })
    );
  }

  update(id: number, payload: UserPayload): Observable<User> {
    return this.http.put<User>(this.url + '/' + id, payload)
      .pipe(
        tap((userModified) => {
          this._users.set(this.users().map(user => user.id == id ? userModified : user))
        })
      )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      tap(() => {
        this._users.set(this.users().filter((user) => user.id != id));
      })
    );
  }

  setSearch(val: string) {
    this._search.set(val);
  }
}
