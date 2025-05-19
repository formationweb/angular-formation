import { Component, Input, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="name">
        @if (name() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNames() ; track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
        </ul>
    `,
    imports: [FormsModule]
}) 
export class SearchComponent {
    // model(), c'est in input(), où on peut le donner un ngModel
    // input(valDefault), juste récupérer la valeur du composant parent
    // input.required()
    name = model<string>('')
    //@Input() name = ''
    onSearch = output<string>()
    firstNames = signal(['ana', 'jim', 'ben'])

    search() {
        this.onSearch.emit(this.name())
    }
}
