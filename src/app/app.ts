import { Component } from '@angular/core'
import { Navbar } from "./navbar/navbar";

@Component({
    selector: 'app-root',
    template: '<app-navbar />',
    imports: [Navbar]
})
export class App {}