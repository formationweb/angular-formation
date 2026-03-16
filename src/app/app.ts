import { Component, signal } from '@angular/core'
import { Navbar } from './navbar/navbar';
import { Users } from './users/users';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar 
            [title]="myTitle()" 
            userName="ana" 
            (onSearch)="listenSearch($event)" 
        />
        <app-users />
    `,
    imports: [Navbar, Users]
})
export class App {
    myTitle = signal('test')

    listenSearch(userName: string) {
        console.log(userName)
    }
}