import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../../core/services/user.service";
import { AutoCompletePipe } from "../../../shared/pipes/autocomplete.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->

        <ul>
            @for (firstName of firstNames | autocomplete:userName ; track $index) {
                <li>{{ $first }} - {{ firstName }}</li>
            }
            <!-- <li *ngFor="let firstName of firstNames | autocomplete:userName ; let i = index ; let isFirst = first">
               {{ isFirst }} - {{ firstName }}
            </li> -->
        </ul>
    `,
    standalone: true,
    imports: [FormsModule, /*NgIf, NgFor, */ AutoCompletePipe] // ou CommonModule
})
export class SearchComponent implements OnInit {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames: string[] = ['ben', 'ana', 'jim']
    private userService = inject(UserService)

    ngOnInit() {
        console.log(this.userName)
    }

    search() {
        this.eventSearch.emit(this.userName)
        this.userService.userNameSearched.set(this.userName)
    }
}