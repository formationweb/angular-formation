import { Component, effect, inject, input, numberAttribute, OnInit, resource, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../core/services/user';
import { User } from '../../core/interfaces/user';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit /*implements OnInit*/ {
  //private router = inject(Router)
  private userModel = inject(UserModel)
  id = input.required({
   // transform: (value: string) => +value
   transform: numberAttribute
  })
  // user = rxResource({
  //   params: () => this.id(),
  //   loader: ({ params }) => this.userModel.get(params)
  // })
  user = signal<User>({} as User)

  constructor() {
    effect(() => {
       this.userModel.get(this.id()).subscribe((resUser) => {
        this.user.set(resUser)
       })
    })
    //this.router.navigateByUrl('/')
  }

  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id']
  //   console.log(id)
  // }
}
