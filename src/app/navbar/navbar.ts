import { Component, inject, signal } from "@angular/core";
import { Search } from "./search";
import { NavbarService } from "./navbar.service";
import { UserService } from "../users/user.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <app-search [userName]="name()" (onSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [Search, RouterLink]
})
export class Navbar {
    private readonly navbarService = inject(NavbarService)
    private userService = inject(UserService)
    protected readonly title = this.navbarService.title
    protected readonly name = signal('ana')

    listenSearch(userName: string) {
        this.userService.setSearch(userName)
    }
}