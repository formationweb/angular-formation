import { Component, effect, ElementRef, inject, OnInit, QueryList, ViewChildren, WritableSignal } from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { User } from '../../core/interfaces/user';
import { LoaderComponent } from '../../atomics/loader/loader.component';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { FormsModule } from '@angular/forms';
import { ExtensionPipe } from '../../shared/pipes/extension.pipe';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [
    UserCardComponent,
    LoaderComponent,
    PluralPipe,
    FormsModule,
    ExtensionPipe,
  ],
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService)

  @ViewChildren('refUserCard') propUserCard!: QueryList<ElementRef<HTMLDivElement>>
  
  isLoading = true;
  error = ''
  nbSelected = 0;
  extSelected = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  userIndex = 0
  users = this.userService.usersFiltered

  //constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  scrollToUser() {
    const array = this.propUserCard.toArray()
    const elUserCard = array[this.userIndex]
    if (!elUserCard) {
      this.error = 'Index invalide'
      return
    }
    elUserCard.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
