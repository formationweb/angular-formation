import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';
import { User } from '../users/user.interface';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private userService = inject(UserService)
  // private route = inject(ActivatedRoute)
  // private paramId = this.route.snapshot.paramMap.get('id')
  // id = signal(this.paramId ? +this.paramId : null)

  id = input.required({
    transform: numberAttribute
  })

  user = rxResource({
    params: () => {
      return {
        userId: this.id()
      }
    },
    stream: ({ params }) => {
      return this.userService.get(params.userId)
    }
  })

  // constructor() {
  //   effect(() => {
  //     this.userService.get(this.id()).subscribe((user) => {
  //       this.user.set(user)
  //     })
  //   })
  // }
}
