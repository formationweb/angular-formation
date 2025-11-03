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
                <li [class]="{ red: $even, green: $odd }">{{ name }}</li>
            }
            @empty {
                <p>Aucun prénom</p>
            }
        </ul>
    `,
    imports: [FormsModule],
    styles: `
        .red {
            color: red;
        }
        .green {
            color: green;
        }
    `
})
export class Search {
    userName = model('') // model(), c'est un input() qui peut être modifié
    onSearch = output<string>()

    firstNames = signal(['ana', 'ben', 'jim'])

    search() {
        this.onSearch.emit(this.userName())
    }
}