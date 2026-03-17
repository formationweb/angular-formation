import { Component, signal } from '@angular/core'
import { Navbar } from './navbar/navbar';
import { Users } from './users/users';
import { Draw } from './draw/draw';

@Component({
    selector: 'app-root',
    template: `
        <!-- <app-navbar 
            [title]="myTitle()" 
            userName="ana" 
            (onSearch)="listenSearch($event)" 
        />
        <app-users /> -->
        <app-draw />
    `,
    imports: [Navbar, Users, Draw]
})
export class App {
    myTitle = signal('test')

    listenSearch(userName: string) {
        console.log(userName)
    }
}