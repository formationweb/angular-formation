import { Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { UserModel } from '../models/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit {
  private usersService = inject(UsersService)
  private builder = inject(FormBuilder)
  user = signal<UserModel>({} as UserModel)
  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   this.route.snapshot.params['id']
  // }

  propName = new FormControl('')
  form = this.builder.group({
    name: this.propName,
    username: '',
    email: ''
  })

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
      this.usersService.get(this.id()).subscribe({
        next: (user) => {
          this.user.set(user)
          this.form.patchValue(user)
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  }

  editUser() {
    this.usersService
      .update(this.user().id, this.form.value as Partial<UserModel>)
      .subscribe((userModified) => {
         this.user.set({
          ...this.user(),
          ...userModified
         })
      })
  }
}
