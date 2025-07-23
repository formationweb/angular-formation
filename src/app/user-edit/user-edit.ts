import { Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from '../users/users.service';
import { User } from '../core/interfaces/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit  {
  private usersModel = inject(UsersModel)
  private formBuilder = inject(FormBuilder)
  user = signal<User>({} as User)

  propEmail = new FormControl('')
  form = this.formBuilder.group({
    email: this.propEmail,
    name: '',
    username: ''
  })

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
       this.usersModel.get(this.id()).subscribe({
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

  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //    const id = this.route.snapshot.params['id']
  // }
}
