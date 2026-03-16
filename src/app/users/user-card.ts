import { Component, input } from "@angular/core";
import { User } from "./user.interface";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}