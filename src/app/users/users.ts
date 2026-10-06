import { Component, computed, ElementRef, inject, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader';
import { Opacity } from '../atomics/opacity';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

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
  
  listenOpacity(opacity: number) {
    console.log(opacity)
  }

  scrollToUser() {
    this.elScroll()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}