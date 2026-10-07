import { Component, input, output } from '@angular/core';
import { User } from '../user.interface';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-user-card',
  template: `
    <article>
        <ng-content select="[entete]" />
        <header>
            {{ user().name }}
        </header>
        <p>{{ user().email }}</p>
         <ng-content select="h2" />
         <button (click)="removeUser.emit(user().id)">Supprimer</button>
         <button [routerLink]="['user', user().id]">Modifier</button>
    </article>
  `,
})
export class UserCard {
  readonly user = input.required<User>()
  readonly removeUser = output<number>()
}
