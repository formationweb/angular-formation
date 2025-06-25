import { Component, input, output } from '@angular/core';
import { User } from '../../../core/interfaces/user';
import { LangPipe } from '../../../pipes/lang';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [LangPipe, RouterLink],
  template: `
    <article>
        <ng-content select=".title" />
        <header>{{ user().name }}</header>
        <p>{{ user().email }}</p>
        <button (click)="handleDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
        <button [routerLink]="['user', user().id]">Modifier</button>
        <ng-content select=".footer" />
    </article>
  `
})
export class UserCard {
  user = input.required<User>()
  handleDelete = output<number>()
}
