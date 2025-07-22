import { Component, input } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".title" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <footer>
                <ng-content select="h2" />
                <button>{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
        </article>
    `,
    imports: [LangPipe]
})
export class UserCard {
    user = input.required<User>()
}