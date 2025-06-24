import { Component } from '@angular/core';
import { Users } from '../../features/users/users';
import { Navbar } from '../../features/navbar/navbar';

@Component({
  selector: 'app-main',
  imports: [Users, Navbar],
  template: `
    <app-navbar />
    <app-users />
  `
})
export class Main {

}
