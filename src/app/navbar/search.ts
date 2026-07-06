import { Component, computed, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    imports: [FormsModule],
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of namesFiltered() ; track name) {
                <li [class]="{ red: $even }">{{ $even }} - {{ name }}</li>
            }
        </ul>
        <p [style]="{ color: 'red', fontWeight: 'bold' }">dzfr</p>

    `,
    styles: `
        .red {
            color: red;
        }

        .bold {
            font-weight: bold;
        }
    `
})
export class Search {
     //readonly userName = input('') // valeur en entrée en lecture seule
     readonly userName = model('') // valeur en entrée modifiable
     readonly onSearch = output<string>()
     protected readonly names = signal(['ana', 'ben', 'jim'])
     protected readonly namesFiltered = computed(() => {
        return this.names().filter(name => name.includes(this.userName()))
     })

     search() {
        this.onSearch.emit(this.userName())
     }
}