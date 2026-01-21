import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../core/interfaces/user';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private usersService = inject(UsersService)
  // private route = inject(ActivatedRoute)
  // id = signal<string | null>(null)

  // constructor() {
  //   this.id.set(this.route.snapshot.paramMap.get('id'))
  //   console.log(this.id())
  // }

  id = input.required({
    transform: numberAttribute
  })

  user = signal<User>({} as User)

  // user = toSignal(
  //   toObservable(this.id).pipe(
  //     switchMap((id) => {
  //       return this.usersService.get(id)
  //     })
  //   )
  // )

  constructor() {
    effect(() => {
      this.usersService.get(this.id()).subscribe((user) => {
        this.user.set(user)
      })
    })
  }
}
