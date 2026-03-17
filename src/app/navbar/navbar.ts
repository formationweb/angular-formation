import { DatePipe, UpperCasePipe } from "@angular/common";
import { Component, computed, inject, Input, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AppService } from "../app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase}}</h1>
        <p>{{ now() | date:'short':'GMT-8'}}</p>
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (name of namesFiltered() ; track $index) {
                <!-- <li [class]="{ 
                    red: $odd, 
                    green: $even,
                    bold: $index == 3
                }">{{ $odd }} - {{ name }}</li> -->
                <!-- <li 
                    [class.red]="$odd" 
                    [class.green]="$even" 
                    [class.bold]="$index == 3"
                >{{ $odd }} - {{ name }}</li> -->
                <!-- <li [class.red]="$odd" class="bold">{{ $odd }} - {{ name }}</li> -->

                <li [style]="{ color: 'red', fontWeight: 'bold' }">{{ name }}</li>
            }
            @empty {
                <p>Vide</p>
            }
        </ul>
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [FormsModule, UpperCasePipe, DatePipe, RouterLink],
    styles: `
        .red {
            color: red;
        }
        .bold {
            font-weight: bold;
        }
        .green {
            color: green;
        }
    `
})
export class Navbar {
    private appService = inject(AppService)
    title = this.appService.title

    userName = model('') // avoir un attribut html personnalisé en lecture/écriture
    onSearch = output<string>() // avoir un attribut html personnalisé pour notre propre événement
    now = signal(Date.now())

    names = signal(['ana', 'ben', 'jim'])

    namesFiltered = computed(() => this.names().filter(str => str.startsWith(this.userName())))

    search() {
       this.onSearch.emit(this.userName())
    }
}