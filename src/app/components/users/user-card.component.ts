import { Component, input, output } from "@angular/core";
import { User } from "../../core/interfaces/user";
import { LangPipe } from "../../pipes/lang.pipe";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".header" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <ng-content select=".footer" />
            <footer>
                <button [routerLink]="['user', user().id]">Modifier</button>
                <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
        </article>
    `,
    imports: [LangPipe, RouterLink]
})
export class UserCardComponent {
    user = input.required<User>()
    onDelete = output<number>()
}