import { Component, Input, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of names() ; track $index) {
                <!-- <li [class]="{ 
                    red: $odd, 
                    green: $even,
                    bold: $index == 3
                }">{{ $odd }} - {{ name }}</li> -->
                <!-- <li 
                    [class.red]="$odd" 
                    [class.green]="$even" 
                    [class.bold]="$index == 3"
                >{{ $odd }} - {{ name }}</li> -->
                <!-- <li [class.red]="$odd" class="bold">{{ $odd }} - {{ name }}</li> -->

                <li [style]="{ color: 'red', fontWeight: 'bold' }">{{ name }}</li>
            }
            @empty {
                <p>Vide</p>
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
        .green {
            color: green;
        }
    `
})
export class Navbar {
    title = input.required() // avoir un attribut html personnalisé en lecture seule
    userName = model('') // avoir un attribut html personnalisé en lecture/écriture
    onSearch = output<string>() // avoir un attribut html personnalisé pour notre propre événement

    names = signal(['ana', 'ben', 'jim', 'ana'])

    search() {
       this.onSearch.emit(this.userName())
    }
}