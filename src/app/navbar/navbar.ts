import { Component, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, LowerCasePipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }} - {{ now | date:'short' | lowercase }}</h1>
        <app-search [userName]="name()" (handleSearch)="listenSearch($event)" />
    `,
    imports: [Search, UpperCasePipe, DatePipe, LowerCasePipe]
})
export class Navbar {
    name = signal('ben')
    title = signal('Mon App')
    now = Date.now()

    listenSearch(userName: string) {
        console.log(userName)
    }
}