import { Component, computed, ElementRef, inject, OnDestroy, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from '../core/interfaces/user';
import { Loader } from '../atomics/loader';
import { Opacity } from "../atomics/opacity/opacity";
import { FormsModule, NgForm } from '@angular/forms';
import { Draw } from "../draw/draw";
import { UsersService } from './users.service';
import { PluralPipe } from '../core/pipes/plural';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, FormsModule, Draw, PluralPipe]
})
export class Users /* implements OnDestroy */ {
  private usersService = inject(UsersService)
  users = this.usersService.usersSearched
  extensions = signal(['tv', 'biz', 'io', 'me'])
  extSelected = signal('')
  usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.users()
    }
    return this.users().filter(user => user.email.endsWith(this.extSelected()))
  })

  indexUser = signal(0)
  cardEls = viewChildren<ElementRef<HTMLDivElement>>('cardRef')
  cardEl = computed<ElementRef<HTMLDivElement> | undefined>(() => this.cardEls()[this.indexUser()])
  error =  computed(() => this.cardEl() ? '': 'Index invalide')

  loading = signal(true)
  loadingCreate = signal(false)
  //subscription: Subscription

  private _users = toSignal(
    this.usersService.getAll()
      .pipe(
        tap(() => {
          this.loading.set(false)
        })
      )
  )

  count = toSignal(interval(1000).pipe(
    tap((nb) => {
      console.log(nb)
    })
  ))

  constructor() {
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

  // constructor() {
  //   this.usersService.getAll().subscribe(() => {
  //     this.loading.set(false)
  //   })
  // }

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
     this.cardEl()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  deleteUser(id: number) {
     this.usersService.delete(id).subscribe()
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loadingCreate.set(true)
    this.usersService.create(form.value).subscribe(() => {
      this.loadingCreate.set(false)
      form.resetForm()
    })
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
}
