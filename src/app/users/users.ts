import { Component, computed, ElementRef, inject, OnDestroy, resource, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader/loader';
import { Opacity } from "../atomics/opacity";
import { Draw } from "../draw";
import { FormsModule, NgForm } from "@angular/forms";
import { UserPayload, UserService } from './user.service';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { PluralPipe } from '../core/pipes/plural.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, Draw, FormsModule, PluralPipe]
})
export class Users {
  private userService = inject(UserService)
  protected readonly extensions  = signal(['tv', 'biz', 'io', 'me'])
  protected readonly extSelected = signal('')
  protected readonly users = this.userService.usersSearched
  protected readonly usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.users()
    } 
    return this.users().filter(user => user.email.endsWith(this.extSelected()))
  })
  protected readonly userCardEls = viewChildren<ElementRef<HTMLDivElement>>('userCardRef')
  protected readonly indexInput = signal(0)
  protected readonly indexCardEl = computed<ElementRef<HTMLDivElement> | undefined>(() => this.userCardEls()[this.indexInput()])
  protected readonly indexError = computed(() => this.indexCardEl() ? '' : 'Index invalide')

  protected readonly loadingCreate = signal(false)
  //private subscription: Subscription

  constructor() {
    this.userService.getAll()
    .pipe(
        takeUntilDestroyed()
     )
    .subscribe()
    //this.subscription = interval(1000).subscribe(console.log)
     interval(1000)
     .pipe(
        takeUntilDestroyed()
     )
     .subscribe(console.log)
  }

  removeUser(id: number) {
    this.userService.delete(id).subscribe()
  }

  createUser(form: NgForm) {
    const payload: UserPayload = form.value
    this.loadingCreate.set(true)
    this.userService.create(payload).subscribe(() => {
      this.loadingCreate.set(false)
      form.resetForm()
    })
  }

  // usersResource = rxResource({
  //   stream: () => {
  //     return this.userService.getAll()
  //   }ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
  // })

  //  usersResource = resource({
  //   loader: () => {
  //     return fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //   }
  // })

  // usersResource = httpResource<User[]>(() => 'https://jsonplaceholder.typicode.com/users')

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
    this.indexCardEl()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
}
