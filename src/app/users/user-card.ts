import { AfterContentInit, Component, contentChild, effect, ElementRef, input, output } from "@angular/core";
import { User } from "../core/interfaces/user";
import { LangPipe } from "../core/pipes/lang";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".title" />
            <header>{{ user().name }}</header>
            <p>{{ user().email }}</p>
            <footer>
                <ng-content select="h2" />
                <button (click)="onDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
                <button [routerLink]="['user', user().id]">Modifier</button>
            </footer>
        </article>
    `,
    imports: [LangPipe, RouterLink]
})
export class UserCard  {
    cardEl = contentChild<ElementRef<HTMLElement>>('cardTitleRef')
    user = input.required<User>()
    onDelete = output<number>()

    constructor() {
        effect(() => {
            //console.log(this.cardEl()?.nativeElement)
        })
    }
}