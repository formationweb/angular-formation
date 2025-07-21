import { Component, signal } from "@angular/core";
import { Search } from "./search";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search [userName]="name()" (handleSearch)="listenSearch($event)" />
    `,
    imports: [Search]
})
export class Navbar {
    name = signal('ben')
    title = signal('Mon App')

    listenSearch(userName: string) {
        console.log(userName)
    }
}