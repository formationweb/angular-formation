import { Component, input, output } from "@angular/core";
import { UserModel } from "../models/user";
import { LangPipe } from "../core/pipes/lang";
import { RouterLink } from "@angular/router";
import { ConfirmDirective } from "../core/directives/confirm";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1,h2" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <button 
                (onConfirm)="onDelete.emit(user().id)" 
                confirm="Etes vous sûr ..."
                [confirmUsername]="user().name"
                >{{ 'REMOVE' | lang:'fr' }}
            </button>
            <button [routerLink]="['user', user().id]">Modifier</button>
        </article>
    `,
    imports: [LangPipe, RouterLink, ConfirmDirective]
})
export class UserCard {
    user = input.required<UserModel>()
    onDelete = output<number>()
}