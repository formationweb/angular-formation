import { Component, ElementRef, inject, OnInit, QueryList, Signal, ViewChildren } from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { User } from '../../core/interfaces/user';
import { LoaderComponent } from '../../atomics/loader/loader.component';
import { FormsModule, NgForm } from '@angular/forms';
import { PluralPipe } from '../../pipes/plural.pipe';
import { ExtensionPipe } from '../../pipes/extension.pipe';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [UserCardComponent, LoaderComponent, FormsModule, PluralPipe, ExtensionPipe]
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService)
  @ViewChildren('refUserCard') propUserCard!: QueryList<ElementRef<HTMLElement>>
  readonly users = this.usersService.usersFiltered
  loading = true
  loadingCreate = false
  userIndex = 0
  nbSelected = 0
  errorMessage = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me']
  extSelected = ''

  //constructor(private usersService: UsersService) { }

  ngOnInit(): void {
     this.usersService.getAll().subscribe(() => {
        this.loading = false
     })
  }

  scrollToUser() {
    const elCard = this.propUserCard.toArray()[this.userIndex]
    if (!elCard) {
      this.errorMessage = 'index invalide'
      return
    }
    elCard.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loadingCreate = true
    this.usersService.create(form.value).subscribe(() => {
      this.loadingCreate = false
      form.resetForm()
    })
  }

  deleteUser(id: number) {
    this.usersService.delete(id).subscribe()
  }
}
