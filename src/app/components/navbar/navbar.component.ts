import { Component, signal } from "@angular/core";
import { SearchComponent } from "./search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search [name]="userName()" />
    `,
    imports: [SearchComponent]
})
export class NavbarComponent {
    title = signal('Mon App')
    userName = signal('ben')
}