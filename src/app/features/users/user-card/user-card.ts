import { Component, input } from '@angular/core';
import { User } from '../../../core/interfaces/user';
import { LangPipe } from '../../../pipes/lang';

@Component({
  selector: 'app-user-card',
  imports: [LangPipe],
  template: `
    <article>
        <header>{{ user().name }}</header>
        <p>{{ user().email }}</p>
        <button>{{ 'REMOVE' | lang:'fr' }}</button>
    </article>
  `
})
export class UserCard {
  user = input.required<User>()
}
