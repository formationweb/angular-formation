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
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->

        <ul>
            @for (firstName of firstNames ; track $index) {
                <li>{{ $first }} - {{ firstName }}</li>
            }
            <!-- <li *ngFor="let firstName of firstNames ; let i = index ; let isFirst = first">
               {{ isFirst }} - {{ firstName }}
            </li> -->
        </ul>
    `,
    standalone: true,
    imports: [FormsModule, NgIf, NgFor] // ou CommonModule
})
export class SearchComponent {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames: string[] = ['ben', 'ana', 'jim']

    search() {
        this.eventSearch.emit(this.userName)
    }
}