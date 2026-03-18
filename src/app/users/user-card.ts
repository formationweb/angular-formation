import { Component, input, output } from "@angular/core";
import { User } from "./user.interface";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".head" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <button (click)="onDelete.emit(user().id)">Supprimer</button>
            <button [routerLink]="['user', user().id]">Modifier</button>
            <ng-content />
        </article>
    `,
    imports: [RouterLink]
})
export class UserCard {
    user = input.required<User>()
    onDelete = output<number>()
}