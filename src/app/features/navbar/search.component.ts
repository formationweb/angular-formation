import { NgFor, NgIf } from "@angular/common";
import { Component, computed, EventEmitter, Input, model, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutocompletePipe } from "../../pipes/autocomplete.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }

        <ul>
            @for (name of firstNames | autocomplete:userName() ; track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
                <!-- <li *ngFor="let name of firstNames | autocomplete:userName ; let i = index ; let isFirst = first">
                   {{ isFirst }} - {{ name }}
                </li> -->
        </ul>

        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    `,
    imports: [FormsModule, AutocompletePipe /*NgFor , NgIf*/]
})
export class SearchComponent implements OnInit {
   // @Input() userName = ''
    userName = model('')
   // uppercaseUserName = computed(() => this.userName().toUpperCase())

    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames = ['ana', 'ben', 'jim']

    ngOnInit(): void {
        
    }

    search() {
        this.eventSearch.emit(this.userName())
    }
}