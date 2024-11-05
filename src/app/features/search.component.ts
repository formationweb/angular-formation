import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutoCompletePipe } from "../shared/pipes/autocomplete.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
         <ul>
            @for (name of firstNames | autocomplete:userName ; track name) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
                <!-- <li *ngFor="let name of firstNames | autocomplete:userName ; let i = index">
                    {{ i }} - {{ name }}
                </li> -->
        </ul>
    `,
    standalone: true,
    imports: [FormsModule, NgIf, NgFor, AutoCompletePipe]
})
export class SearchComponent {
    @Input() userName = ''
    @Output() onSearch: EventEmitter<string> = new EventEmitter()
    firstNames: string[] = ['ana', 'ben', 'jim']

    search() {
        this.onSearch.emit(this.userName)
    }
}