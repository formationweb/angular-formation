import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
    `,
    imports: [NavbarComponent, UsersComponent]
    //standalone: true // obligatoire avant Angular 19
})
export class AppComponent {}