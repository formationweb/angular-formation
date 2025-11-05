import { Component, effect, input, OnChanges, OnInit, output, SimpleChanges } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";
import { RouterLink } from "@angular/router";
import { ConfirmDirective } from "../core/directives/confirm";

@Component({
    selector: 'app-user-card',
    imports: [LangPipe, RouterLink, ConfirmDirective],
    template: `
        <article>
            <ng-content select=".header" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <ng-content select=".footer" />
            <footer>
                <button 
                (click)="onDelete.emit(user().id)" 
                confirm="Etes vous sûr ..."
                [confirmUsername]="user().name"
                >
                {{ 'REMOVE' | lang:'fr' }}</button>
                <button [routerLink]="['user', user().id]">Modifier</button>
            </footer>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
    onDelete = output<number>()
}