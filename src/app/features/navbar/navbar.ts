import { Component, signal } from "@angular/core";
import { Search } from "./search";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [name]="userName()" (changeSearch)="listenSearch($event)" />
    `,
    imports: [Search]
})
export class Navbar {
    title = 'Mon App'
    userName = signal('ben')

    listenSearch(name: string) {
        console.log(name)
    }
}
