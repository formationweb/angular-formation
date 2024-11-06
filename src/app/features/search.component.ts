import { NgFor, NgIf } from '@angular/common';
import { Component, computed, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompletePipe } from '../shared/pipes/autocomplete.pipe';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="propUserName" />
    @if (userName != '') {
    <button (click)="search()">Rechercher</button>
    }
    <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    <ul>
      @for (name of firstNames() | autocomplete:userName ; track name) {
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
  private userService = inject(UserService)

  @Input() userName = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  firstNames = computed(() => {
    return this.userService.users().map(user => user.name)
  })
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
