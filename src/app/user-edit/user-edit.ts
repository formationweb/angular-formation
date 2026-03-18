import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPayload, UsersService } from '../users/users.service';
import { User } from '../users/user.interface';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private usersService = inject(UsersService)
  private builder = inject(FormBuilder)
  // private route = inject(ActivatedRoute)
  // id = signal('')
  id = input.required({
    transform: numberAttribute
  })
  user = signal({} as User)

  nameField = new FormControl('', {
    nonNullable: true
  })
  form = this.builder.group({
    name: this.nameField,
    username: '',
    email: ''
  })

  // constructor() {
  //   const userId = this.route.snapshot.paramMap.get('id')
  //   if (userId) this.id.set(userId)
  // }

  //  user = toSignal(
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
          this.form.patchValue(user)
        })
      })
  }

  editUser() {
    this.usersService
      .update(this.id(), this.form.value as UserPayload)
      .subscribe((userModified) => {
        this.user.set({
          ...this.user(),
          ...userModified
        })
      })
  }
}
