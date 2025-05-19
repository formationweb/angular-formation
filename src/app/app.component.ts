import { Component } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
    `,
    imports: [NavbarComponent, UsersComponent]
})
export class AppComponent {}