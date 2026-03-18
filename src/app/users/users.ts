import { Component, computed, ElementRef, inject, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader/loader';
import { Opacity } from "../atomics/opacity";
import { FormsModule } from '@angular/forms';
import { PluralPipe } from '../core/pipes/plural';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, FormsModule, PluralPipe]
})
export class Users {
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

  constructor() {
    this.usersService.getAll().subscribe(() => {
      this.loading.set(false)
    })
  }

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
