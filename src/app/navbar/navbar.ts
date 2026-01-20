import { Component, computed, inject, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of firstNamesFiltered() ; track name) {
                <!-- <li [class.red]="$even" [class.green]="$odd" class="bold">{{ name }}</li>  -->
                 <li [style]="{ color: 'red', fontWeight: 'bold' } ">{{ name }}</li>
            }
        </ul>
    `,
    imports: [FormsModule],
    styles: `
        .red {
            color: red;
        }

        .green {
            color: green;
        }

        .bold {
            font-weight: bold;
        }
    `
})
export class Navbar {
    private appService = inject(AppService)
    title = this.appService.title
    userName = model('') // comme input(), mais modifiable
    firstNames = signal(['ana', 'ben', 'jim'])
    onSearch = output<string>()
    firstNamesFiltered = computed(() => {
        return this.firstNames().filter(str => str.startsWith(this.userName()))
    })

    search() {
        this.onSearch.emit(this.userName())
    }
}