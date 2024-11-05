import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";
import { DatePipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        <p>{{ now | date:'fullTime':'GMT+2' }}</p>
        <app-search [userName]="myName" (onSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, DatePipe, RouterLink]
})
export class NavbarComponent {
    title = 'Mon App'
    myName = 'sam'
    now = Date.now()

    listenSearch(userName: string) {
        console.log(userName)
    }
}