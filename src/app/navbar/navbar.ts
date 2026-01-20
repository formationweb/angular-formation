import { Component, computed, inject, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppService } from "../app.service";
import { UsersService } from "../users/users.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() }}</h1>
        <input type="text" [(ngModel)]="userName">
        @if (userName() != '') {
            <button (click)="search()">Rechercher</button>
        }
        <ul>
            @for (user of users() ; track user.id) {
                <!-- <li [class.red]="$even" [class.green]="$odd" class="bold">{{ name }}</li>  -->
                 <li [style]="{ color: 'red', fontWeight: 'bold' } ">{{ user.name }}</li>
            }
        </ul>
        <button routerLink="/login">Se connecter</button>
    `,
    imports: [FormsModule, RouterLink],
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
    private usersService = inject(UsersService)

    title = this.appService.title
    users = this.usersService.usersSearched
    userName = model('') // comme input(), mais modifiable
    //firstNames = signal(['ana', 'ben', 'jim'])
    onSearch = output<string>()
    // firstNamesFiltered = computed(() => {
    //     return this.firstNames().filter(str => str.startsWith(this.userName()))
    // })

    search() {
        this.onSearch.emit(this.userName())
        this.usersService.setSearch(this.userName())
    }
}