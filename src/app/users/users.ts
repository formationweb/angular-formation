import { Component, computed, ElementRef, inject, signal, viewChildren } from "@angular/core";
import { UserCard } from "./user-card";
import { UserModel } from "../models/user";
import { Loader } from "../atomics/loader";
import { Opacity } from "../atomics/opacity";
import { FormsModule, NgForm } from "@angular/forms";
import { Draw } from "../draw/draw";
import { PluralPipe } from "../core/pipes/plural";
import { UsersService } from "./users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.html',
    imports: [UserCard, Loader, Opacity, FormsModule, Draw, PluralPipe]
})
export class Users {
    private usersService = inject(UsersService)
 
    users = this.usersService.usersSearch
    extensions = signal(['tv', 'biz', 'io', 'me'])
    extSelected = signal('')
    usersFiltered = computed(() => {
      if (!this.extSelected()) {
        return this.users()
      }
      return this.users().filter(user => user.email.endsWith(this.extSelected()))
    })
    usersEl = viewChildren<ElementRef<HTMLDivElement>>('userRef')
    userIndex = signal(0)
    currentEl = computed(() => this.usersEl()[this.userIndex()])
    error = computed(() => this.currentEl() ? '': 'Index invalide')
    loadingCreate = signal(false)
    loading = signal(true)

    constructor() {
      this.usersService.getAll().subscribe(() => {
        this.loading.set(false)
      })
    }

    listenChange(opacity: number) {
      //console.log(opacity)
    }

    scrollToUser() {
      if (this.currentEl()) {
        this.currentEl().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    createUser(form: NgForm) {
      if (form.invalid) return
      this.loadingCreate.set(true)
      this.usersService.create(form.value).subscribe(() => {
        this.loadingCreate.set(false)
        form.resetForm()
      })
    }

    deleteUser(id: number) {
      this.usersService.delete(id).subscribe()
    }
}