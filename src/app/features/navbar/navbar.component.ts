import { Component } from "@angular/core";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [userName]="name" />
    `,
    standalone: true,
    imports: [SearchComponent]
})
export class NavbarComponent {
    title = 'Mon App'
    name = 'ana'
}