import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
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
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames = ['ana', 'ben', 'jim']

    search() {
        this.eventSearch.emit(this.userName)
    }
}