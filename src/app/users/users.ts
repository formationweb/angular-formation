import { Component, computed, ElementRef, inject, resource, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card';
import { User } from './user.interface';
import { Loader } from '../atomics/loader/loader';
import { Opacity } from "../atomics/opacity";
import { Draw } from "../draw";
import { FormsModule } from "@angular/forms";
import { UserService } from './user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  imports: [UserCard, Loader, Opacity, Draw, FormsModule],
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

  constructor() {
    this.userService.getAll().subscribe()
  }

  removeUser(id: number) {
    
  }

  // usersResource = rxResource({
  //   stream: () => {
  //     return this.userService.getAll()
  //   }
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
}
