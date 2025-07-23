import { Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from '../users/users.service';
import { User } from '../core/interfaces/user';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit  {
  private usersModel = inject(UsersModel)
  user = signal<User>({} as User)

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
       this.usersModel.get(this.id()).subscribe({
        next: (user) => {
          this.user.set(user)
        },
        error: (err) => {
          console.log(err)
        }
       })
    })
  }

  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //    const id = this.route.snapshot.params['id']
  // }
}
