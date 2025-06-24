import { Component, computed, ElementRef, inject, signal, viewChildren } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { User } from '../../core/interfaces/user';
import { PluralPipe } from '../../pipes/plural';
import { FormsModule } from '@angular/forms';
import { Loader } from '../../atomics/loader';
import { OpacityRange } from '../../atomics/opacity';
import { Draw } from '../draw/draw';
import { UserModel } from '../../core/services/user';

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
export class Users {
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

  constructor() {
    this.userModel.fetchAll().subscribe(() => {
      this.loadingUsers.set(false)
    })
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

  deleteUser(id: number) {
    console.log(id)
  }
}
