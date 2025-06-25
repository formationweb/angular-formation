import { Component, computed, ElementRef, inject, OnDestroy, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { User } from '../../core/interfaces/user';
import { PluralPipe } from '../../pipes/plural';
import { FormsModule, NgForm } from '@angular/forms';
import { Loader } from '../../atomics/loader';
import { OpacityRange } from '../../atomics/opacity';
import { Draw } from '../draw/draw';
import { UserModel } from '../../core/services/user';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, PluralPipe, FormsModule, Loader],
  styles: `
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    .bold {
      font-weight: 'bold'
    }
  `
})
export class Users implements OnDestroy {
  private userModel = inject(UserModel)
  users = this.userModel.users
  nbSelected = signal(0)
  loadingUsers = signal(true)
  extensions = signal(['tv', 'biz', 'io', 'me'])
  extSelected = signal('')
  usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.users()
    }
    return this.users()
      .filter(user => user.email.endsWith(this.extSelected()))
  })
  elCards = viewChildren<ElementRef<HTMLDivElement>>('refCard')
  currentIndex = signal(0)
  errorMessage = signal('')
  loadingCreate = signal(false)
 // subscription!: Subscription

  constructor() {
    this.userModel.fetchAll().subscribe(() => {
      this.loadingUsers.set(false)
    })
    // const ob$ = interval(1000)

    // this.subscription = ob$.subscribe((nb) => {
    //   console.log(nb)
    // })
  }

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
    const elCard = this.elCards()[this.currentIndex()]
    if (!elCard) {
      this.errorMessage.set('index invalide')
      return
    }
    this.errorMessage.set('')
    elCard.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  createUser(form: NgForm) {
    this.loadingCreate.set(true)
    this.userModel.create(form.value).subscribe(() => {
      this.loadingCreate.set(false)
      form.resetForm()
    })
  }

  deleteUser(id: number) {
    this.userModel.delete(id).subscribe()
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe()
  }
}
