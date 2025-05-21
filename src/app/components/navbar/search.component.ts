import { Component, computed, effect, Input, input, model, OnInit, output, signal } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NameFilterPipe } from "../../pipes/name.pipe";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [formControl]="propName">
        @if (name() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNames() | nameFilter:name(); track $index) {
                <li>{{ name }}</li>
            }
            @empty {
                <p>Pas de noms</p>
            }
        </ul>
    `,
    imports: [ReactiveFormsModule, NameFilterPipe]
}) 
export class SearchComponent implements OnInit {
    // model(), c'est in input(), où on peut le donner un ngModel
    // input(valDefault), juste récupérer la valeur du composant parent
    // input.required()
    propName = new FormControl()

    name = model<string>('')
    //@Input() name = ''
    onSearch = output<string>()
    firstNames = signal(['ana', 'jim', 'ben'])
    // firstNamesFiltered = computed(() => {
    //     return this.firstNames().filter(name => name.startsWith(this.name()))
    // })

    ngOnInit() {
        // effect(() => {
        //     console.log(this.name())
        // })
        this.propName.setValue(this.name())
        this.propName.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe((val: string) => {
               this.name.set(val)
            })
    }

    search() {
        this.onSearch.emit(this.name())
    }
}
