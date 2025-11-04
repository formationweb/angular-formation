import { Component, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }}</h1>
        <p>{{ now | date:undefined:'+0430' | uppercase }}</p>
        <app-search 
            [userName]="name()" 
            (onSearch)="listenSearch($event)" 
        />
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [Search, UpperCasePipe, DatePipe, RouterLink]
})
export class Navbar {
    title = signal('Mon App')
    name = signal('ben')
    now = Date.now()

    listenSearch(userName: string) {
        console.log(userName)
    }
}