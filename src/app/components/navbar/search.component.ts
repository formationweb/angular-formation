import { Component, Input, input, model, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="name">
        <button (click)="search()">Rechercher</button>
    `,
    imports: [FormsModule]
}) 
export class SearchComponent {
    // model(), c'est in input(), où on peut le donner un ngModel
    // input(), juste récupérer la valeur du composant parent
    name = model()
    //@Input() name = ''

    search() {
        console.log(this.name())
    }
}
