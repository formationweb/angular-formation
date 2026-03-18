import { Component, computed, ElementRef, inject, OnDestroy, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader/loader';
import { Opacity } from "../atomics/opacity";
import { FormsModule } from '@angular/forms';
import { PluralPipe } from '../core/pipes/plural';
import { UsersService } from './users.service';
import { interval, Subscription, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, FormsModule, PluralPipe]
})
export class Users /* implements OnDestroy */ {
  private usersService = inject(UsersService)
  users = this.usersService.usersSearched
  loading = signal(true)
  extensions  = signal(['tv', 'biz', 'io', 'me'])
  extSelected = signal('')
  usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.users()
    }
    return this.users()
      .filter(user => user.email.endsWith(this.extSelected()))
  })

  userCardView = viewChildren<ElementRef<HTMLDivElement>>('userCardRef')
  userCardEl = computed<ElementRef<HTMLDivElement> | undefined>(() => this.userCardView()[this.indexSelected()])
  indexSelected = signal(0)
  error = computed(() => !this.userCardEl() ? 'Index Invalide' : '')
 // subscription: Subscription

  //  count = toSignal(interval(1000).pipe(
  //   tap((nb) => {
  //     console.log(nb)
  //   })
  //  ))

  constructor() {
    this.usersService.getAll().subscribe(() => {
      this.loading.set(false)
    })
    // this.subscription = interval(1000).subscribe((nb) => {
    //   console.log(nb)
    // })

    // interval(1000)
    //   .pipe(
    //     takeUntilDestroyed()
    //   )
    //   .subscribe((nb) => {
    //     console.log(nb)
    //   })
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
    this.userCardEl()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  deleteUser(id: number) {
     this.usersService.delete(id).subscribe()
  }
}
