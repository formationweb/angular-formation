import { Component, input } from '@angular/core';
import { User } from '../user.interface';

@Component({
  imports: [],
  selector: 'app-user-card',
  template: `
    <article>
        <ng-content select="[entete]" />
        <header>
            {{ user().name }}
        </header>
        <p>{{ user().email }}</p>
         <ng-content select="h2" />
         <button>Supprimer</button>
    </article>
  `,
})
export class UserCard {
  readonly user = input.required<User>()
}
