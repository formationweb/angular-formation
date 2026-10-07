import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { UserService } from '../users/user.service';
import { User } from '../users/user.interface';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-user-edit',
  styleUrl: './user-edit.css',
  templateUrl: './user-edit.html',
})
export class UserEdit {
  private userService = inject(UserService)
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
}
