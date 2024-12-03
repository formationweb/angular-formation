import { Component, ElementRef, inject, OnInit, QueryList, Signal, ViewChildren } from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { User } from '../../core/interfaces/user';
import { LoaderComponent } from '../../atomics/loader/loader.component';
import { FormsModule } from '@angular/forms';
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
  userIndex = 0
  nbSelected = 0
  errorMessage = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me']
  extSelected = ''

  //constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      setTimeout(() => {
        this.loading = false
      }, 1000)
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
}
