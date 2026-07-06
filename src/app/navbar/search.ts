import { Component, signal } from "@angular/core";
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
            @for (name of names() ; track name) {
                <li>{{ $index }} - {{ name }}</li>
            }
        </ul>

    `
})
export class Search {
     protected readonly userName = signal('ana')
     protected readonly names = signal(['ana', 'ben', 'jim'])

     search() {
        console.log(this.userName())
     }
}