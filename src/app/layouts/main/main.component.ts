import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UsersComponent } from "../../components/users/users.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, UsersComponent],
  template: `
    <app-navbar />
    <app-users />
  `
})
export class MainComponent { }
