import { Component, computed, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserEditPayload, UserService } from '../users/user.service';
import { User } from '../users/user.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private userService = inject(UserService)
  private builder = inject(FormBuilder)
  // private route = inject(ActivatedRoute)
  // private paramId = this.route.snapshot.paramMap.get('id')
  // id = signal(this.paramId ? +this.paramId : null)

  emailField = new FormControl('', {
    nonNullable: true
  })
  form = this.builder.group({
    email: this.emailField,
    name: '',
    username: ''
  })

  id = input.required({
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
    }
  })

  protected readonly userValue = computed<User>(() => this.user.value() ?? {} as User)

  constructor() {
    effect(() => {
      //this.emailField.setValue(this.user.value()?.email ?? '')
      this.form.patchValue(this.userValue())
    })
  }

  editUser() {
    this.userService
      .update(this.id(), this.form.value as UserEditPayload)
      .subscribe((user) => {
         this.user.set({
          ...this.userValue(),
          ...user
         })
      })
  }

  // constructor() {
  //   effect(() => {
  //     this.userService.get(this.id()).subscribe((user) => {
  //       this.user.set(user)
  //     })
  //   })
  // }
}
