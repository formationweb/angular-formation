import { Component, signal } from '@angular/core'
import { Navbar } from './navbar/navbar';
import { Users } from './users/users';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar 
            [userName]="firstName()" 
            (onSearch)="listenSearch($event)" />
        <app-users />
    `,
    imports: [Navbar, Users]
})
export class App {
    firstName = signal('ben')

    listenSearch(userName: string) {
        console.log(userName)
    }
}