import { Component, effect, input, OnChanges, OnInit, output, SimpleChanges } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    imports: [LangPipe, RouterLink],
    template: `
        <article>
            <ng-content select=".header" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <ng-content select=".footer" />
            <footer>
                <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
                <button [routerLink]="['user', user().id]">Modifier</button>
            </footer>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
    onDelete = output<number>()
}