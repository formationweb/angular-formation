import { Component, signal } from "@angular/core";
import { Search } from "./search";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search 
            [userName]="name()" 
            (onSearch)="listenSearch($event)" 
        />
    `,
    imports: [Search]
})
export class Navbar {
    title = signal('Mon App')
    name = signal('ben')

    listenSearch(userName: string) {
        console.log(userName)
    }
}