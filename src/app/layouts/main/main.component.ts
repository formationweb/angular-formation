import { Component } from '@angular/core';
import { NavbarComponent } from '../../features/navbar/navbar.component';
import { UsersComponent } from '../../features/users/users.component';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, UsersComponent],
  template: `
    <app-navbar />
    <app-users />
  `
})
export class MainComponent {}
