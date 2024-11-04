import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    `,
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class SearchComponent {
    userName = 'ana'

    search() {
        console.log(this.userName)
    }
}