import { Component, input } from "@angular/core";
import { User } from "../core/interfaces/user";

@Component({
    selector: "app-user-card",
    template: `
        <article>
            <header>
                <ng-content select="h1[entete]" />
                {{ user().name }}
            </header>
            <p>{{ user().email }}</p>
            <ng-content select="h2" />
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}