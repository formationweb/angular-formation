import { Component, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNames() ; track name) {
                <li>{{ $last }} - {{ name }}</li>
            }
            @empty {
                <p>Liste vide</p>
            }
        </ul>
    `,
    imports: [FormsModule]
})
export class Search {
    userName = model('') // une valeur en entrée
    onSearch = output<string>()
    firstNames = signal(['ben', 'ana', 'jim'])

    search() {
        this.onSearch.emit(this.userName())
    }
}