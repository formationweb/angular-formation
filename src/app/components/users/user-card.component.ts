import { Component, input, output } from "@angular/core";
import { User } from "../../core/interfaces/user";
import { LangPipe } from "../../pipes/lang.pipe";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".header" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <ng-content select=".footer" />
            <footer>
                <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
        </article>
    `,
    imports: [LangPipe]
})
export class UserCardComponent {
    user = input.required<User>()
    onDelete = output<number>()
}