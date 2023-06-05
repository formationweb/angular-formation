import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [username]="name" (onSearch)="listenSearch($event)" />
    `
})
export class NavbarComponent {
    title: string = 'Mon App'
    name: string = 'ben'
    price: number = 15

    listenSearch(username: string) {
        console.log(username)
    }
}