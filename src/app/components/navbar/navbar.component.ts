import { Component, signal } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1 [class]="{ blue: true }" class="small italic">{{ title() | uppercase }}</h1>
        <p>{{ price() | currency:undefined:'code' }}</p>
        <app-search [name]="userName()" (onSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe, RouterLink],
    styles: `
        .blue {
            color: blue;
        }
        .small {
            font-size: 10px;
        }
        .italic {
            font-style: italic;
        }
    `
})
export class NavbarComponent {
    title = signal('Mon App')
    price = signal(15)

    userName = signal('ben')

    listenSearch(name: string) {
        this.userName.set(name)
    }
}