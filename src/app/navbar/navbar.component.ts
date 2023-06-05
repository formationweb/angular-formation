import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search />
    `
})
export class NavbarComponent {
    title: string = 'Mon App'
}