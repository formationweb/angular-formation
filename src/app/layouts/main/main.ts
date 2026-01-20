import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { Users } from "../../users/users";

@Component({
  selector: 'app-main',
  imports: [Navbar, Users],
  template: `
    <app-navbar />
    <app-users />
  `
})
export class Main {

}
