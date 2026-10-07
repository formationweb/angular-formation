import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main',
    template: `
        <app-navbar />
        <router-outlet />
    `,
    imports: [Navbar,RouterOutlet]
})
export class Main {}