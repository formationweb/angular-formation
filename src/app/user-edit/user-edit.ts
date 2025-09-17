import { Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit {
  private usersService = inject(UsersService)
  user = signal<UserModel>({} as UserModel)
  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   this.route.snapshot.params['id']
  // }

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
      this.usersService.get(this.id()).subscribe({
        next: (user) => {
          this.user.set(user)
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  }
}
