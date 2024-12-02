import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>My App</h1>
        <app-navbar />
    `,
    imports: [NavbarComponent]
    //standalone: true // obligatoire avant Angular 19
})
export class AppComponent {}