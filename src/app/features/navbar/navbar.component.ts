import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>
            {{ title | uppercase }} - 
            {{ now | date:'full':'GMT+2' }}
            {{ price | currency:'EUR':'code':'1.2-5'}}
        </h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    imports: [SearchComponent, UpperCasePipe, DatePipe, CurrencyPipe]
})
export class NavbarComponent {
    title = 'Mon App'
    name = 'ben'
    now = Date.now()
    price = 15

    listenSearch(userName: string) {
        console.log(userName)
    }
}