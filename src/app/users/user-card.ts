import { Component, Input, input, OnInit, output } from "@angular/core";
import { User } from "./user.interface";
import { RouterLink } from "@angular/router";
import { ConfirmDirective } from "../core/directives/confirm.directive";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".header" />
            <h2>{{ user().name }}</h2>
            <p>{{ user().email }}</p>
            <ng-content />
             <ng-content select="[footer]" />
             <button 
                (onConfirm)="onDelete.emit(user().id)" 
                confirm="Etes vous de"
                [confirmUsername]="user().name"
                >
                Supprimer
            </button>
             <button [routerLink]="['user', user().id]">Modifier</button>
        </article>
    `,
    imports: [RouterLink, ConfirmDirective]
})
export class UserCard {
    readonly user = input.required<User>()
    readonly onDelete = output<number>()
}