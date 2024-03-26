import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';
import { LangPipe } from '../../../shared/pipes/lang.pipe';

@Component({
  selector: 'app-user-card',
  template: `
    <article>
      <header>{{ user.name }}</header>
      {{ user.email }}
      <footer>
        <button (click)="removeUser()">{{ 'REMOVE' | lang:'en' }}</button>
      </footer>
    </article>
  `,
  standalone: true,
  imports: [LangPipe]
})
export class UserCardComponent {
  @Input() user: User = {} as User;
  @Output() eventDelete: EventEmitter<number> = new EventEmitter()

  removeUser() {
    this.eventDelete.emit(this.user.id)
  }
}
