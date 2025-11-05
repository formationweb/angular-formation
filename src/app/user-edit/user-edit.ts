import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../core/interfaces/user';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private usersService = inject(UsersService)
  user = signal<User>({} as User)

  // private route = inject(ActivatedRoute)
  // id = signal(0)

  // constructor() {
  //    const userId = this.route.snapshot.params['id']
  //    this.id.set(userId)
  // }

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
       this.usersService.getUser(this.id()).subscribe((user) => {
         this.user.set(user)
       })
    })
  }
}
