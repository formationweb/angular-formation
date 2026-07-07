import { Component, inject, signal } from "@angular/core";
import { Search } from "./search";
import { NavbarService } from "./navbar.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search [userName]="name()" (onSearch)="listenSearch($event)" />
    `,
    imports: [Search]
})
export class Navbar {
    private readonly navbarService = inject(NavbarService)
    protected readonly title = this.navbarService.title
    protected readonly name = signal('ana')

    listenSearch(userName: string) {
        console.log(userName)
    }
}