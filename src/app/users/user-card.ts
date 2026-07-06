import { Component, input } from "@angular/core";
import { User } from "./user.interface";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <h2>{{ user().name }}</h2>
            <p>{{ user().email }}</p>
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}