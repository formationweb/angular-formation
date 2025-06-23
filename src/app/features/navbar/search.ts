import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="name">
        @if (name() != '') {
          <button (click)="search()">rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="name() != ''">rechercher</button> -->
    `,
    imports: [FormsModule]
})
export class Search {
  name = signal('ana')

  search() {
    console.log(this.name())
  }
}