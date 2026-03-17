import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { Users } from "../users/users";

@Component({
    selector: 'app-main-layout',
    template: `
        <app-navbar title="Mon App" />
        <app-users />
    `,
    imports: [Navbar, Users]
})
export class MainLayout {}