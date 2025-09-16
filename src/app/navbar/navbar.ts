import { Component, inject, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, UpperCasePipe } from "@angular/common";
import { NavbarService } from "./navbar.service";
import { UsersService } from "../users/users.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }}</h1>
        <p>{{ now | date:'short':'GMT-8' }}</p>
        <app-search 
            [userName]="name()" 
            (onSearch)="listenSearch($event)" 
        />
        <button routerLink="/login">Connexion</button>
    `,
    imports: [Search, UpperCasePipe, DatePipe, RouterLink]
})
export class Navbar {
    private navbarService = inject(NavbarService)
    private usersService = inject(UsersService)

    title = this.navbarService.title
    name = signal('ben')
    now = Date.now()

    listenSearch(userName: string) {
       this.usersService.setSearch(userName)
    }
}