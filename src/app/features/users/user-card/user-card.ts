import { Component, input, output } from '@angular/core';
import { User } from '../../../core/interfaces/user';
import { LangPipe } from '../../../pipes/lang';
import { RouterLink } from '@angular/router';
import { ConfirmDirective } from '../../../directives/confirm';

@Component({
  selector: 'app-user-card',
  imports: [LangPipe, RouterLink, ConfirmDirective],
  template: `
    <article>
        <ng-content select=".title" />
        <header>{{ user().name }}</header>
        <p>{{ user().email }}</p>
        <button 
          (handleConfirm)="handleDelete.emit(user().id)" 
          confirm="Etes vous sur ..."
          [confirmUserName]="user().name"
        >{{ 'REMOVE' | lang:'fr' }}</button>
        <button [routerLink]="['user', user().id]">Modifier</button>
        <ng-content select=".footer" />
    </article>
  `
})
export class UserCard {
  user = input.required<User>()
  handleDelete = output<number>()
}
