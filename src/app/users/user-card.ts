import { Component, Input, input, OnInit, output } from "@angular/core";
import { User } from "./user.interface";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".header" />
            <h2>{{ user().name }}</h2>
            <p>{{ user().email }}</p>
            <ng-content />
             <ng-content select="[footer]" />
             <button (click)="onDelete.emit(user().id)">Supprimer</button>
             <button [routerLink]="['user', user().id]">Modifier</button>
        </article>
    `,
    imports: [RouterLink]
})
export class UserCard {
    readonly user = input.required<User>()
    readonly onDelete = output<number>()
}