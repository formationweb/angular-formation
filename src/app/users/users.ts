import { Component, computed, ElementRef, inject, signal, viewChildren } from "@angular/core";
import { UserCard } from "./user-card";
import { User } from "../core/interfaces/user";
import { Loader } from "../atomics/loader";
import { Opacity } from "../atomics/opacity/opacity";
import { FormsModule } from "@angular/forms";
import { PluralPipe } from "../core/pipes/plural";
import { Draw } from "../draw/draw";
import { UsersService } from "./users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.html',
    imports: [UserCard, Loader, Opacity, FormsModule, PluralPipe, Draw],
})
export class Users {
    private usersService = inject(UsersService)
    
    extensions = signal(['tv', 'biz', 'io', 'me'])
    extSelected = signal('')
  
    users = this.usersService.users

    constructor() {
      this.usersService.loadUsers().subscribe()
    }

    usersFiltered = computed(() => {
      if (!this.extSelected()) {
        return this.users()
      }
      return this.users()
        .filter(user => user.email.endsWith(this.extSelected()))
    })

    cardEl = viewChildren<ElementRef<HTMLDivElement>>('userRef')
    cardDiv = computed<ElementRef<HTMLDivElement> | undefined>(() => this.cardEl()[this.userIndex()])
    userIndex = signal(0)
    errorMessage = computed(() => this.cardDiv() ? '' : 'Index invalide')

    listenOpacity(opacity: number) {
      console.log(opacity)
    }

    scrollToUser() {
       this.cardDiv()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    removeUser(id: number) {
       this.usersService.deleteUser(id).subscribe()
    }
}