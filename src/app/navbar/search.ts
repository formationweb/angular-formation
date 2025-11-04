import { Component, computed, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNamesFiltered() ; track name) {
                <li [class]="{ red: $even, green: $odd }" class="bold">{{ name }}</li>
            }
            @empty {
                <p>Aucun prénom</p>
            }
        </ul>

        <p [style]="{ color: 'red', fontWeight: 'bold' }">Texte rouge</p>
    `,
    imports: [FormsModule],
    styles: `
        .red {
            color: red;
        }
        .green {
            color: green;
        }
        .bold {
            font-weight: bold;
        }
    `
})
export class Search {
    userName = model('') // model(), c'est un input() qui peut être modifié
    onSearch = output<string>()

    firstNames = signal(['ana', 'ben', 'jim'])
    firstNamesFiltered = computed(() => {
        return this.firstNames().filter(name => name.startsWith(this.userName()))
    })

    search() {
        this.onSearch.emit(this.userName())
    }
}