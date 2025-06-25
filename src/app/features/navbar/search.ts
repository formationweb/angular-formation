import { Component, computed, Input, input, model, OnInit, output, signal } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [formControl]="propSearch">
        @if (name() != '') {
          <button (click)="search()">rechercher</button>
        }
        <ul>
          @for (firstName of firstNamesFiltered() ; track $index) {
            <li>{{ firstName }}</li>
          }
        </ul>
        <!-- <button (click)="search()" *ngIf="name() != ''">rechercher</button> -->
    `,
    imports: [ReactiveFormsModule]
})
export class Search implements OnInit {
  propSearch = new FormControl()
  name = model('')
  //@Input() name = ''
  firstNames = signal(['ana', 'ben', 'jim'])
  firstNamesFiltered = computed(() => {
    return this.firstNames().filter(firstName => firstName.startsWith(this.name()))
  })
  changeSearch = output<string>()
  // @Output() changeSearch: EventEmitter<string> = new EventEmitter()

  ngOnInit() {
    this.propSearch.setValue(this.name())
    this.propSearch.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((val) => {
       this.name.set(val)
    })
  }

  search() {
    this.changeSearch.emit(this.name())
  }
}