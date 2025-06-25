import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Navbar } from '../../features/navbar/navbar';

@Component({
  selector: 'app-main',
  imports: [Navbar, RouterOutlet],
  template: `
    <app-navbar />
    <router-outlet />
  `
})
export class Main {

}
