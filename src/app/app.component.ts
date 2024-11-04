import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>Titre</h1>
        <app-navbar />
    `,
    standalone: true,
    imports: [NavbarComponent]
})
export class AppComponent {}