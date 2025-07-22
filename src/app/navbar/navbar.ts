import { Component, inject, signal } from "@angular/core";
import { Search } from "./search";
import { DatePipe, LowerCasePipe, UpperCasePipe } from "@angular/common";
import { AppModel } from "../app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }} - {{ now | date:'short' | lowercase }}</h1>
        <app-search [userName]="name()" (handleSearch)="listenSearch($event)" />
    `,
    imports: [Search, UpperCasePipe, DatePipe, LowerCasePipe]
})
export class Navbar {
    private appModel = inject(AppModel)

    name = signal('ben')
    now = Date.now()
    title = this.appModel.title

    listenSearch(userName: string) {
        console.log(userName)
    }
}