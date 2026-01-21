import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../core/interfaces/user';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';
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
  // private route = inject(ActivatedRoute)
  // id = signal<string | null>(null)

  // constructor() {
  //   this.id.set(this.route.snapshot.paramMap.get('id'))
  //   console.log(this.id())
  // }

  nameField = new FormControl('')
  form = this.builder.group({
    name: this.nameField,
    username: '',
    email: ''
  })

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
        //this.nameField.setValue(user.name)
        this.form.patchValue(user)
      })
    })
  }
}
