import { Component, computed, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        <!-- @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        } -->
        <ul>
            @for (name of firstNamesFiltered() ; track $index) {
                <!-- <li [class]="{ red: $last }" class="bold">{{ $last }} - {{ name }}</li> -->
                <li>{{ name }}</li>
            }
            @empty {
                <p>Liste vide</p>
            }
        </ul>
    `,
    styles: `
        .red {
            color: red;
        }

        .bold {
            font-weight: bold;
        }

        div {
            width: 100px;
            height: 100px;
            background-color: black;
            opacity: 1;
        }
    `,
    imports: [FormsModule]
})
export class Search {
    userName = model('') // une valeur en entrée
    onSearch = output<string>()
    firstNames = signal(['ben', 'ana', 'jim'])
    firstNamesFiltered = computed(() => {
        return this.firstNames().filter(name => name.startsWith(this.userName()))
    })
            
    search() {
        this.onSearch.emit(this.userName())
    }
}