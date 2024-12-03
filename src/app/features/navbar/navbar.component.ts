import { Component, effect, inject } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AppService } from "../../core/services/app.service";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>
            {{ title() | uppercase }} - 
            {{ now | date:'full':'GMT+2' }}
            {{ price | currency:'EUR':'code':'1.2-5'}}
        </h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
        <button (click)="changeTitle()">Modifier titre</button>
    `,
    imports: [SearchComponent, UpperCasePipe, DatePipe, CurrencyPipe, RouterLink]
})
export class NavbarComponent {
    private appService = inject(AppService)
    private usersService = inject(UsersService)

    title = this.appService.title
    name = 'ben'
    now = Date.now()
    price = 15

    constructor() {
        effect(() => {
          
        })
    }

    listenSearch(userName: string) {
       this.usersService.setStrSearch(userName)
    }

    changeTitle() {
        this.appService.setTitle('Nouveau titre')
    }
}