import { Component, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        <p>{{ now | date:'short':'GMT-8' }}</p>
        <app-search 
            [userName]="name()" 
            (onSearch)="listenSearch($event)" 
        />
    `,
    imports: [Search, UpperCasePipe, DatePipe]
})
export class Navbar {
    title = 'Mon App'
    name = signal('ben')
    now = Date.now()

    listenSearch(userName: string) {
        console.log(userName)
    }
}