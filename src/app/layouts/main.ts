import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main-layout',
    host: {
        'class': 'dark'
    },
    template: `
        <app-navbar title="Mon App" />
        <router-outlet />
    `,
    imports: [Navbar, RouterOutlet]
})
export class MainLayout {}