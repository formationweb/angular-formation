import { NgFor, NgIf } from "@angular/common";
import { Component, computed, EventEmitter, inject, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutoCompletePipe } from "../../shared/pipes/autocomplete.pipe";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [formControl]="propUserName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->

       <ul>
        @for (name of fistNames() | autocomplete:userName ; track $index) {
            <li>{{ name }}</li>
        }
        @empty {
            <p>Aucun nom trouvé</p>
        }
            <!-- <li *ngFor="let name of fistNames ; let i = index ; let isFirst = first">
                {{ isFirst }} - {{ name }}
            </li> -->
        </ul>
    `,
    standalone: true,
    imports: [ReactiveFormsModule,  /*NgIf, NgFor*/ AutoCompletePipe]
})
export class SearchComponent implements OnInit {
    private usersService = inject(UsersService)

    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    fistNames = computed(() => {
        return this.usersService.users().map(user => user.name)
    })
    propUserName = new FormControl()

    ngOnInit() {
        this.propUserName.valueChanges
        .pipe(
            debounceTime(300),
            distinctUntilChanged()
        )
        .subscribe((str: string) => {
            this.userName = str
        })
    }

    search() {
       this.eventSearch.emit(this.userName)
    }
}