import { Component, OnInit, computed, effect, signal } from "@angular/core";
import { User } from "src/app/core/interfaces/user";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  nbSelected: number = 0
  extSelected: string = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me']
  users = signal<User[]>([])

  usersExtensionBiz = computed(() => {
    return this.users().filter(user => user.email.endsWith('biz')).length
  })

  constructor(private userService: UserService) {
    effect(() => {
      console.log('signal !!!')
    })
  }

  ngOnInit(): void {
    this.userService.getAll().then((users: User[]) => {
      this.users.set(users)
    })
  }

  createUser() {
    this.userService.create({
      email: 'ana@gmail.com',
      name: 'ana'
    }).subscribe((user: User) => {
       const users = this.users()
       users.push(user)
    })
  }

  deleteUser(id: number) {
    console.log(id)
  }
}