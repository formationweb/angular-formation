import { CommonModule } from "@angular/common";
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
            @for (name of firstNames() ; track $index) {
                <!-- <li [class]="{ red: $even, 'my-green': $odd }" class="bold">{{ name }}</li> -->
                <!-- <li [style]="{ backgroundColor: 'red' }">{{ name }}</li> -->
                 <li>{{ name }}</li>
            } 
            @empty {
                <p>Aucun nom</p>
            }
        </ul>
    `,
    imports: [FormsModule],
    styles: `
        .red {
            color: red;
        }

        .bold {
            font-weight: bold;
        }

        .my-green {
            color: green;
        }

        div {
            width: 100px;
            height: 100px;
        }
    `
})
export class Search {
   // userName = input.required<string>()
    userName = model('')
    handleSearch = output<string>()
    firstNames = signal(['ana', 'ben', 'jim'])

    search() {
        this.handleSearch.emit(this.userName())
    }
}