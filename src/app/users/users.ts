import { Component, computed, ElementRef, inject, OnDestroy, signal, viewChildren } from "@angular/core";
import { UserCard } from "./user-card";
import { User } from "../core/interfaces/user";
import { Loader } from "../atomics/loader";
import { Opacity } from "../atomics/opacity/opacity";
import { FormsModule, NgForm } from "@angular/forms";
import { PluralPipe } from "../core/pipes/plural";
import { Draw } from "../draw/draw";
import { UsersService } from "./users.service";
import { interval, Subscription } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-users',
    templateUrl: './users.html',
    imports: [UserCard, Loader, Opacity, FormsModule, PluralPipe, Draw],
})
export class Users /*implements OnDestroy */{
    private usersService = inject(UsersService)
    
    extensions = signal(['tv', 'biz', 'io', 'me'])
    extSelected = signal('')
  
    users = this.usersService.users

    cardEl = viewChildren<ElementRef<HTMLDivElement>>('userRef')
    cardDiv = computed<ElementRef<HTMLDivElement> | undefined>(() => this.cardEl()[this.userIndex()])
    userIndex = signal(0)
    errorMessage = computed(() => this.cardDiv() ? '' : 'Index invalide')

    loading = signal(true)
    loadingCreate = signal(false)
    subscription!: Subscription

    constructor() {
      this.usersService.loadUsers().subscribe(() => {
        this.loading.set(false)
      })
      // this.subscription = interval(1000).subscribe((nb) => {
      //   console.log(nb)
      // })
      interval(1000)
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe((nb) => {
        console.log(nb)
      })
    }

    usersFiltered = computed(() => {
      if (!this.extSelected()) {
        return this.users()
      }
      return this.users()
        .filter(user => user.email.endsWith(this.extSelected()))
    })

    listenOpacity(opacity: number) {
      console.log(opacity)
    }

    scrollToUser() {
       this.cardDiv()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    removeUser(id: number) {
       this.usersService.deleteUser(id).subscribe()
    }

    createUser(form: NgForm) {
        if (form.invalid) {
          return
        }
        this.loadingCreate.set(true)
        this.usersService.createUser(form.value).subscribe(() => {
          this.loadingCreate.set(false)
          form.resetForm()
        })
    }

    // ngOnDestroy(): void {
    //   this.subscription.unsubscribe()
    // }
}