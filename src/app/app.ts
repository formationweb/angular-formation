import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar";

@Component({
    selector: 'app-root',
    imports: [Navbar],
    template: `
        <h1>Mon App</h1>
        <app-navbar />
    `
})
export class App {}