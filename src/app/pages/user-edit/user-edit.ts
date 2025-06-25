import { Component, effect, inject, input, numberAttribute, OnInit, resource, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../core/services/user';
import { User } from '../../core/interfaces/user';
import { rxResource } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface UserEditForms {
  name: FormControl<string | null>
  username: string
  email: string
}

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit /*implements OnInit*/ {
  //private router = inject(Router)
  private userModel = inject(UserModel)
  private builder = inject(FormBuilder)
  id = input.required({
   // transform: (value: string) => +value
   transform: numberAttribute
  })
  // user = rxResource({
  //   params: () => this.id(),
  //   stream: ({ params }) => this.userModel.get(params)
  // })
  user = signal<User>({} as User)

  propName = new FormControl()
  form = this.builder.group<UserEditForms>({
    name: this.propName,
    username: '',
    email: ''
  })

  constructor() {
    effect(() => {
       this.userModel.get(this.id()).subscribe((resUser) => {
        this.user.set(resUser)
        // this.propName.setValue(this.user().name)
        this.form.patchValue(this.user())
       })
    })
    //this.router.navigateByUrl('/')
  }

  edit() {}

  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id']
  //   console.log(id)
  // }
}
