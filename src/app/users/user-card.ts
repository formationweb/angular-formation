import { Component, Input, input, OnInit } from "@angular/core";
import { User } from "./user.interface";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".header" />
            <h2>{{ user().name }}</h2>
            <p>{{ user().email }}</p>
            <ng-content />
             <ng-content select="[footer]" />
        </article>
    `
})
export class UserCard {
    user = input.required<User>()
}