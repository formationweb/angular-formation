import { Component, Input } from "@angular/core";
import { User } from "src/app/core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
            {{ user.email }}
            <footer>
                <button>{{ 'REMOVE' | lang:'en' }}</button>
            </footer>
        </article>
    `
})
export class UserCardComponent {
    @Input() user: User = {} as User
}