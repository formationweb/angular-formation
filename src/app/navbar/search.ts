import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        <button (click)="search()">Rechercher</button>
    `,
    imports: [FormsModule]
})
export class Search {
    userName = 'ben'

    search() {
        console.log(this.userName)
    }
}