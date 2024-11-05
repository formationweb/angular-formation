import { Component, inject } from "@angular/core";
import { SearchComponent } from "./search.component";
import { DatePipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AppService } from "../core/services/app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }}</h1>
        <button (click)="changeTitle()">Changer titre</button>
        <p>{{ now | date:'fullTime':'GMT+2' }}</p>
        <app-search [userName]="myName" (onSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, DatePipe, RouterLink]
})
export class NavbarComponent {
    private appService = inject(AppService)
    title = this.appService.title

    myName = 'sam'
    now = Date.now()

    changeTitle() {
        this.appService.setTitle('Nouveau titre')
    }

    listenSearch(userName: string) {
        console.log(userName)
    }
}