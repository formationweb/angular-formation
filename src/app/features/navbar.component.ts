import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [userName]="myName" (onSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent]
})
export class NavbarComponent {
    title = 'Mon App'
    myName = 'sam'

    listenSearch(userName: string) {
        console.log(userName)
    }
}