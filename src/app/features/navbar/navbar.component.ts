import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    imports: [SearchComponent]
})
export class NavbarComponent {
    title = 'Mon App'
    name = 'ben'

    listenSearch(userName: string) {
        console.log(userName)
    }
}