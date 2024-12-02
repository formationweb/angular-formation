import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }

        <ul>
            @for (name of firstNames ; track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
                <!-- <li *ngFor="let name of firstNames ; let i = index ; let isFirst = first">
                   {{ isFirst }} - {{ name }}
                </li> -->
        </ul>

        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    `,
    imports: [FormsModule, /*NgFor , NgIf*/]
})
export class SearchComponent {
    userName = 'ana'
    firstNames = ['ana', 'ben', 'jim']

    search() {
        console.log(this.userName)
    }
}