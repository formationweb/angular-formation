import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompletePipe } from '../shared/pipes/autocomplete.pipe';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="propUserName" />
    @if (userName != '') {
    <button (click)="search()">Rechercher</button>
    }
    <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    <ul>
      @for (name of firstNames | autocomplete:userName ; track name) {
      <li>{{ name }}</li>
      } @empty {
      <p>Pas de noms</p>
      }
      <!-- <li *ngFor="let name of firstNames | autocomplete:userName ; let i = index">
                    {{ i }} - {{ name }}
                </li> -->
    </ul>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, AutoCompletePipe],
})
export class SearchComponent implements OnInit {
  @Input() userName = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  firstNames: string[] = ['ana', 'ben', 'jim'];
  propUserName = new FormControl();

  ngOnInit() {
    this.propUserName.setValue(this.userName);
    this.propUserName.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((str) => {
        this.userName = str;
      });
  }

  search() {
    this.onSearch.emit(this.userName);
  }
}
