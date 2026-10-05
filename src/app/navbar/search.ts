import { Component, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    imports: [FormsModule],
    template: `
        <input type="text" [(ngModel)]="userName" />
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of names() ; track name) {
                <li [class]="$odd ? 'red' : ''">{{ $odd }} - {{ name }}</li>
            }
            @empty { 
                <p>Aucun nom</p>
            }
        </ul>
        <div [style]="{ opacity: nb(), backgroundColor: 'black' }">
            
        </div>
    `,
    styles: `
        .red {
            color: red;
        }
    `
})
export class Search {
   // readonly userName = input('') // valeur en entrée en lecture seule
    readonly userName = model('') // valeur en entrée en lecture et écriture
    readonly onSearch = output<string>()
    protected readonly names = signal<string[]>(['ana', 'ben', 'jim'])
    nb = signal(1)

    search() {
       this.onSearch.emit(this.userName())
    }
}