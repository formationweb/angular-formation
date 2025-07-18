import { Component, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        {{ now | date:'short':'GMT-8' }}
        <app-search [name]="userName()" (changeSearch)="listenSearch($event)" />
        <button routerLink="/login">Connexion</button>
    `,
    imports: [Search, UpperCasePipe, DatePipe, RouterLink]
})
export class Navbar {
    title = 'Mon App'
    userName = signal('ben')
    now = new Date()

    listenSearch(name: string) {
        console.log(name)
    }
}
