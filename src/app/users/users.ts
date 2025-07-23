import { Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { UserCard } from './user-card';
import { User } from '../core/interfaces/user';
import { Opacity } from '../atomics/opacity';
import { FormsModule, NgForm } from '@angular/forms';
import { PluralPipe } from '../core/pipes/plural';
import { Draw } from '../draw/draw';
import { Loader } from '../atomics/loader/loader';
import { UsersModel } from './users.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Opacity, FormsModule, PluralPipe, Draw, Loader]
})
export class Users implements OnDestroy {
  private usersModel = inject(UsersModel)
  users = this.usersModel.users
  usersSearch = this.usersModel.usersSearch
  extensions = signal(['tv', 'biz', 'io', 'me'])
  extSelected = signal('')
  loading = signal(true)
  loadingCreate = signal(false)
  subscription!: Subscription

  constructor() {
    this.usersModel.getAll().subscribe(() => {
      this.loading.set(false)
    })

    this.subscription = interval(1000).subscribe((nb) => {
      //console.log(nb)
     })
  }

  usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.usersSearch()
    }
    return this.usersSearch().filter(user => user.email.endsWith(this.extSelected()))
  })

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loadingCreate.set(true)
    this.usersModel.create(form.value).subscribe(() => {
      this.loadingCreate.set(false)
      form.resetForm()
    })
  }

  deleteUser(id: number) {
    this.usersModel.delete(id).subscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
