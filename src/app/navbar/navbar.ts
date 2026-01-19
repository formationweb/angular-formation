import { Component, input, model, output, signal } from "@angular/core";
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
            @for (name of firstNames() ; track name) {
                <li [class]="{ red: $even }">{{ name }}</li> 
            }
        </ul>
    `,
    imports: [FormsModule],
    styles: `
        .red {
            color: red;
        }
    `
})
export class Navbar {
    title = signal('Mon App')
    userName = model('') // comme input(), mais modifiable
    firstNames = signal(['ana', 'ben', 'jim'])
    onSearch = output<string>()

    search() {
        this.onSearch.emit(this.userName())
    }
}