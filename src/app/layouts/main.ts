import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { Users } from "../users/users";

@Component({
    selector: 'app-main',
    template: `
        <app-navbar />
        <app-users />
    `,
    imports: [Navbar, Users]
})
export class Main {}