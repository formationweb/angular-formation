import { Component } from "@angular/core";
import { Search } from "./search";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search />
    `,
    imports: [Search]
})
export class Navbar {
    title = 'Mon App'
}