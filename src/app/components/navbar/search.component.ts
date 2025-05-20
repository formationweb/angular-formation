import { Component, computed, effect, Input, input, model, OnInit, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NameFilterPipe } from "../../pipes/name.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="name">
        @if (name() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNames() | nameFilter:name(); track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
        </ul>
    `,
    imports: [FormsModule, NameFilterPipe]
}) 
export class SearchComponent {
    // model(), c'est in input(), où on peut le donner un ngModel
    // input(valDefault), juste récupérer la valeur du composant parent
    // input.required()
    name = model<string>('')
    //@Input() name = ''
    onSearch = output<string>()
    firstNames = signal(['ana', 'jim', 'ben'])
    // firstNamesFiltered = computed(() => {
    //     return this.firstNames().filter(name => name.startsWith(this.name()))
    // })

    constructor() {
        effect(() => {
            console.log(this.name())
        })
    }

    search() {
        this.onSearch.emit(this.name())
    }
}
