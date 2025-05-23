import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <router-outlet />
  `
})
export class MainComponent { }
