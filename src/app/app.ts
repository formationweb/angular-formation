import { Component } from '@angular/core'
import { Navbar } from './features/navbar/navbar';
import { Users } from './features/users/users';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
    `,
    imports: [Navbar, Users]
})
export class App {

}