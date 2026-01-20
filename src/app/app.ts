import { Component, signal } from '@angular/core'
import { Navbar } from './navbar/navbar';
import { Users } from './users/users';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
    `,
    imports: [Navbar, Users, RouterOutlet]
})
export class App {
    firstName = signal('ben')

    listenSearch(userName: string) {
        console.log(userName)
    }
}