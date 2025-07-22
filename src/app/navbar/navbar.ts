import { Component, inject, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, LowerCasePipe, UpperCasePipe } from "@angular/common";
import { AppModel } from "../app.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }} - {{ now | date:'short' | lowercase }}</h1>
        <app-search [userName]="name()" (handleSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [Search, UpperCasePipe, DatePipe, LowerCasePipe, RouterLink]
})
export class Navbar {
    private appModel = inject(AppModel)

    name = signal('ben')
    now = Date.now()
    title = this.appModel.title

    listenSearch(userName: string) {
        console.log(userName)
    }
}