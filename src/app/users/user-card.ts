import { Component, input, output } from "@angular/core";
import { UserModel } from "../models/user";
import { LangPipe } from "../core/pipes/lang";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1,h2" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
        </article>
    `,
    imports: [LangPipe]
})
export class UserCard {
    user = input.required<UserModel>()
    onDelete = output<number>()
}