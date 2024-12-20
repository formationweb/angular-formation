import { NgFor, NgIf } from "@angular/common";
import { Component, computed, EventEmitter, inject, Input, model, OnInit, Output, Signal } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompletePipe } from "../../pipes/autocomplete.pipe";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [formControl]="propUserName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }

        <ul>
            @for (name of firstNames() | autocomplete:userName() ; track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
                <!-- <li *ngFor="let name of firstNames | autocomplete:userName ; let i = index ; let isFirst = first">
                   {{ isFirst }} - {{ name }}
                </li> -->
        </ul>

        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    `,
    imports: [ReactiveFormsModule, AutocompletePipe /*NgFor , NgIf*/]
})
export class SearchComponent implements OnInit {
    private usersService = inject(UsersService)

   // @Input() userName = ''
    userName = model('')
   // uppercaseUserName = computed(() => this.userName().toUpperCase())

    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames: Signal<string[]> = computed(() => {
        return this.usersService.users().map(user => user.name)
    })

    propUserName = new FormControl()

    ngOnInit(): void {
        this.propUserName.setValue(this.userName())
        this.propUserName.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe((str) => {
                this.userName.set(str)
                this.search()
            })
    }

    search() {
        this.eventSearch.emit(this.userName())
    }
}