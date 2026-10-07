import { Component, computed, ElementRef, inject, OnDestroy, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader';
import { Opacity } from '../atomics/opacity';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { Navbar } from '../navbar/navbar';
import { interval, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, FormsModule],
})
export class Users {
  private userService = inject(UserService)

  protected readonly userCardEl 
    = viewChildren<ElementRef<HTMLDivElement>>('userCardRef')

  protected readonly users = this.userService.usersSearched
  protected readonly extensions  = signal(['tv', 'biz', 'io', 'me'])
  protected readonly extSelected = signal('')
  protected readonly usersFiltered = computed(() => {
    if (!this.extSelected()) {
      return this.users()
    }
    return this.users().filter(user => user.email.endsWith(this.extSelected()))
  })

  protected readonly index = signal(0)

  protected readonly elScroll = computed<ElementRef<HTMLDivElement> | undefined>(
    () => this.userCardEl()[this.index()])
  protected readonly error = computed(() => !this.elScroll() ? 'Index invalide' : '')
  protected readonly loadingUser = signal(true)
  protected readonly loadingCreate = signal(false)
 // private subscription: Subscription

  constructor() {
     this.userService.getAll()
     .pipe(
       takeUntilDestroyed()
     )
     .subscribe({
      next: () => {
        this.loadingUser.set(false)
      },
      error: (err) => {
        console.log(err)
      }
     })
    // this.subscription = interval(1000).subscribe(console.log)
    // interval(1000)
    // .pipe(
    //   takeUntilDestroyed()
    // )
    // .subscribe(console.log)
  }
  
  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
    this.elScroll()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe()
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loadingCreate.set(true)
    this.userService.create(form.value).subscribe(() => {
        this.loadingCreate.set(false)
        form.resetForm()
    })
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
}