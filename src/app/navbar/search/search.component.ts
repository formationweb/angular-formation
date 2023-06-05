import { Component } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="username">
        <button (click)="search()">Rechercher</button>
    `
})
export class SearchComponent {
    username: string = 'ana'

    search() {
        console.log(this.username)
    }
}