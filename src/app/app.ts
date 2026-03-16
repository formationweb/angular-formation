import { Component } from '@angular/core'
import { Navbar } from './navbar/navbar';

@Component({
    selector: 'app-root',
    template: `
        <h1>Mon App</h1>
        <app-navbar />
    `,
    imports: [Navbar]
})
export class App {}