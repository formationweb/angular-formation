import { Component, OnInit, computed, effect, signal } from "@angular/core";
import { NgForm } from "@angular/forms";
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
  loading: boolean = false

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

  createUser(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.loading = true
    this.userService.create(form.value).subscribe((user: User) => {
      const users = this.users()
      this.users.set([...users, user])
      form.resetForm()
      this.loading = false
    })
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      const users = this.users().filter(user => user.id != id)
      this.users.set(users)
    })
  }
}