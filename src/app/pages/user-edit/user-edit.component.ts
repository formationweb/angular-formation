import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private userService = inject(UserService)
  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id'] as string
  //   console.log(id)
  // }

  id = input.required<number>()
  userEdit = signal<User>({} as User)

  // userEdit = rxResource({
  //   request: () => this.id(),
  //   loader: ({ request }) => {
  //     return this.userService.get(request)
  //   }
  // })
  
  ngOnInit() {
    this.userService.get(this.id()).subscribe({
      next: (user) => {
        this.userEdit.set(user)
      },
      error: (error) => {
        
      }
    })
  }
}
