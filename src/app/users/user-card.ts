import { Component, effect, input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";

@Component({
    selector: 'app-user-card',
    imports: [LangPipe],
    template: `
        <article>
            <ng-content select=".header" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <ng-content select=".footer" />
            <footer>
                <button>{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}