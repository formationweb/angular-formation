import { Component, computed, ElementRef, inject, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from '../core/interfaces/user';
import { Loader } from '../atomics/loader';
import { Opacity } from "../atomics/opacity/opacity";
import { FormsModule } from '@angular/forms';
import { Draw } from "../draw/draw";
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, FormsModule, Draw]
})
export class Users {
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

  constructor() {
    this.usersService.getAll().subscribe()
  }

  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
     this.cardEl()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  deleteUser(id: number) {
    console.log(id)
  }
}
