import { Component, signal } from "@angular/core";
import { SearchComponent } from "./search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1 [class]="{ blue: true }" class="small italic">{{ title() }}</h1>
        <app-search [name]="userName()" (onSearch)="listenSearch($event)" />
    `,
    imports: [SearchComponent],
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
    userName = signal('ben')

    listenSearch(name: string) {
        this.userName.set(name)
    }
}