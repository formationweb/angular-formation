import { Component, input, output } from '@angular/core';
import { User } from '../user.interface';
import { RouterLink } from '@angular/router';
import { ConfirmDirective } from '../../core/directives/confirm';

@Component({
  imports: [RouterLink, ConfirmDirective],
  selector: 'app-user-card', // hote
  template: `
    <article>
        <ng-content select="[entete]" />
        <header>
            {{ user().name }}
        </header>
        <p>{{ user().email }}</p>
         <ng-content select="h2" />
         <button 
          (onConfirm)="removeUser.emit(user().id)" 
          confirm="Etes vous sur de ...."
          [confirmUsername]="user().name" 
          >
          Supprimer</button>
         <button [routerLink]="['user', user().id]">Modifier</button>
    </article>
  `,
})
export class UserCard {
  readonly user = input.required<User>()
  readonly removeUser = output<number>()
}
