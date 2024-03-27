import { Component, OnDestroy, OnInit, Signal, effect, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { User } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';
import { ExtensionPipe } from '../../shared/pipes/extension.pipe';
import { PluralPipe } from '../../shared/pipes/plurial.pipe';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [UserCardComponent, PluralPipe, FormsModule, ExtensionPipe],
})
export class UsersComponent implements OnInit, OnDestroy {
  nbSelected = 0;
  extSelected = '';
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  //users: User[] = [];
  private userService = inject(UserService) // Angular 14+
  //constructor(private userService: UserService) { }
  nameSearch: Signal<string> = this.userService.userNameUppercase
  users: Signal<User[]> = this.userService.usersFiltered
  loading = false
  subscription!: Subscription

  constructor() {
    effect(() => {
      console.log(this.nameSearch())
    })
  }
  
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  ngOnInit() {
     this.userService.getAll().subscribe()
     this.subscription = interval(1000).subscribe((nb) => {
       console.log(nb)
     })
  }

  createUser(myForm: NgForm) {
    if (myForm.invalid) return
    this.loading = true
    this.userService.create(myForm.value).subscribe(() => {
      myForm.resetForm()
      this.loading = false
    })
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe()
  }
}
