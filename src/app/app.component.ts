import { Component } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>Mon App</h1>
        <app-navbar />
    `,
    imports: [NavbarComponent]
})
export class AppComponent {}