import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-user-card',
  template: `
    <article>
      <ng-content select="[entete]" />
      <header>{{ user.name }}</header>
      {{ user.email }}
      <ng-content select="[footer1]" />
      <footer>
        <button 
          (eventConfirm)="removeUser()" 
          confirm="Etes vous sûr ..."
          [confirmUsername]="user.name"
          >
        {{ 'REMOVE' | lang:'en' }}</button>
      </footer>
      <ng-content select="[footer2]" />
    </article>
  `,
  standalone: true,
  imports: [SharedModule]
})
export class UserCardComponent {
  @Input() user: User = {} as User;
  @Output() eventDelete: EventEmitter<number> = new EventEmitter()

  removeUser() {
    this.eventDelete.emit(this.user.id)
  }
}
