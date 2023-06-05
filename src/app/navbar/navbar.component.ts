import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [username]="name" (onSearch)="listenSearch($event)" />
    `
})
export class NavbarComponent {
    title: string = 'Mon App'
    name: string = 'ben'

    listenSearch(username: string) {
        console.log(username)
    }
}