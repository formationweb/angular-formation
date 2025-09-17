import { Component, input, output } from "@angular/core";
import { UserModel } from "../models/user";
import { LangPipe } from "../core/pipes/lang";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1,h2" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
            <button [routerLink]="['user', user().id]">Modifier</button>
        </article>
    `,
    imports: [LangPipe, RouterLink]
})
export class UserCard {
    user = input.required<UserModel>()
    onDelete = output<number>()
}