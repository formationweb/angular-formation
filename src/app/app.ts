import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar";
import { Users } from "./users/users";
import { Draw } from "./draw/draw";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [Navbar, Users, Draw, RouterOutlet],
    template: `
        <router-outlet />
        <!-- <app-draw /> -->
    `
})
export class App {}