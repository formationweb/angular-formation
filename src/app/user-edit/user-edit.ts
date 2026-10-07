import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { UserEditPayload, UserService } from '../users/user.service';
import { User } from '../users/user.interface';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-user-edit',
  styleUrl: './user-edit.css',
  templateUrl: './user-edit.html',
})
export class UserEdit {
  private userService = inject(UserService)
  private builder = inject(FormBuilder)

  emailField = new FormControl('')
  form = this.builder.group({
    email: this.emailField,
    username: '',
    name: ''
  })
  
  readonly id = input.required({
    transform: numberAttribute
  })
  protected readonly user = rxResource({
    params: () => {
      return {
        userId: this.id()
      }
    },
    stream: ({ params }) => {
      return this.userService.get(params.userId)
    },
    defaultValue: {} as User
  })

  constructor() {
    effect(() => {
      this.form.patchValue(this.user.value())
    })
  }

  editUser() {
    this.userService
      .update(this.id(), this.form.value as UserEditPayload)
      .subscribe((user) => {
        this.user.value.set({
          ...this.user.value(),
          ...user
        })
       //this.user.reload()
      })
  }
}
