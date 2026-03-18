import { Component, input } from "@angular/core";
import { User } from "./user.interface";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".head" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <button>Supprimer</button>
            <ng-content />
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}