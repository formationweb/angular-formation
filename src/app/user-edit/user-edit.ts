import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../core/interfaces/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private usersService = inject(UsersService)
  private builder = inject(FormBuilder)
  user = signal<User>({} as User)

  propEmail = new FormControl()
  form = this.builder.group({
    email: this.propEmail,
    username: '',
    name: ''
  })

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
         this.form.patchValue(user)
       })
    })
  }
}
