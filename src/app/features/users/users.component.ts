import { Component, effect, ElementRef, inject, OnInit, QueryList, ViewChildren, WritableSignal } from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { User } from '../../core/interfaces/user';
import { LoaderComponent } from '../../atomics/loader/loader.component';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { FormsModule, NgForm } from '@angular/forms';
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
  isCreateLoading = false
  error = ''
  nbSelected = 0;
  extSelected = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  userIndex = 0
  users = this.userService.usersFiltered

  //constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getAll().subscribe(() => {
      this.isLoading = false
    })
  }

  createUser(form: NgForm) {
    this.isCreateLoading = true
    this.userService.create(form.value).subscribe(() => {
      this.isCreateLoading = false
      form.resetForm()
    })
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe()
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
