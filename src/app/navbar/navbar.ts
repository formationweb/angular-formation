import { Component, signal } from "@angular/core";
import { Search } from "./search";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search [userName]="name()" (onSearch)="listenSearch($event)" />
    `,
    imports: [Search]
})
export class Navbar {
    protected readonly title = signal('Mon App')
    protected readonly name = signal('ana')

    listenSearch(userName: string) {
        console.log(userName)
    }
}