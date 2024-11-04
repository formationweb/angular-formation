import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";
import { DatePipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        <p>{{ now | date:'fullTime':'GMT+2' }}</p>
        <app-search [userName]="myName" (onSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, DatePipe]
})
export class NavbarComponent {
    title = 'Mon App'
    myName = 'sam'
    now = Date.now()

    listenSearch(userName: string) {
        console.log(userName)
    }
}