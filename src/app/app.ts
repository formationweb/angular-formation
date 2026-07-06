import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar";

@Component({
    selector: 'app-root',
    template: `
        <h1>Hello World</h1>
        <app-navbar />
    `,
    imports: [Navbar]
})
export class App {}