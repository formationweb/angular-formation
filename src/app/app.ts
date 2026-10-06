import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar";
import { Users } from "./users/users";
import { Draw } from "./draw/draw";

@Component({
    selector: 'app-root',
    imports: [Navbar, Users, Draw],
    template: `
        <app-navbar />
        <app-users />
        <!-- <app-draw /> -->
    `
})
export class App {}