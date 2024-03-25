import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe]
})
export class NavbarComponent {
    title = 'Mon App'
    name = 'ana'
    price = 15

    listenSearch(userName: string) {
        console.log(userName)
    }
}