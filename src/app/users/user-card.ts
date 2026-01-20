import { Component, input, output } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";

@Component({
    selector: "app-user-card",
    imports: [LangPipe], 
    template: `
        <article>
            <header>
                <ng-content select="h1[entete]" />
                {{ user().name }}
            </header>
            <p>{{ user().email }}</p>
            <ng-content select="h2" />
            <button (click)="onDelete.emit(user().id)">
                {{ 'REMOVE' | lang:'fr' }}
            </button>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
    onDelete = output<number>()
}