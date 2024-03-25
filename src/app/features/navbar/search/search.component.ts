import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        <button (click)="search()">Rechercher</button>
    `,
    standalone: true,
    imports: [FormsModule]
})
export class SearchComponent {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()

    search() {
        this.eventSearch.emit(this.userName)
    }
}