import { Component, computed, inject, signal } from '@angular/core';
import { UserCard } from './user-card';
import { User } from '../core/interfaces/user';
import { Opacity } from '../atomics/opacity';
import { FormsModule } from '@angular/forms';
import { PluralPipe } from '../core/pipes/plural';
import { Draw } from '../draw/draw';
import { Loader } from '../loader/loader';
import { UsersModel } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Opacity, FormsModule, PluralPipe, Draw, Loader]
})
export class Users {
  private usersModel = inject(UsersModel)
  users = this.usersModel.users
  usersSearch = this.usersModel.usersSearch
  extensions = signal(['tv', 'biz', 'io', 'me'])
  extSelected = signal('')

  usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.usersSearch()
    }
    return this.usersSearch().filter(user => user.email.endsWith(this.extSelected()))
  })

  listenOpacity(opacity: number) {
    console.log(opacity)
  }
}
