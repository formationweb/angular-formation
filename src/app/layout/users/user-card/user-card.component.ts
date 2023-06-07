import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
            {{ user.email }}
            <footer>
                <button 
                    (click)="removeUser()" 
                    confirm="Etes vous sûr ..."
                    [confirmUsername]="user.name">
                    {{ 'REMOVE' | lang:'en' }}
                </button>
                <button [routerLink]="['user', user.id]">Modifier</button>
            </footer>
        </article>
    `
})
export class UserCardComponent {
    @Input() user: User = {} as User
    @Output() onDelete: EventEmitter<number> = new EventEmitter()

    removeUser() {
        this.onDelete.emit(this.user.id)
    }
}