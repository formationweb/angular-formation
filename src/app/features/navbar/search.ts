import { Component, Input, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="name">
        @if (name() != '') {
          <button (click)="search()">rechercher</button>
        }
        <ul>
          @for (firstName of firstNames() ; track $index) {
            <li>{{ firstName }}</li>
          }
        </ul>
        <!-- <button (click)="search()" *ngIf="name() != ''">rechercher</button> -->
    `,
    imports: [FormsModule]
})
export class Search {
  name = model('')
  //@Input() name = ''
  firstNames = signal(['ana', 'ben', 'jim'])
  changeSearch = output<string>()
  // @Output() changeSearch: EventEmitter<string> = new EventEmitter()

  search() {
    this.changeSearch.emit(this.name())
  }
}