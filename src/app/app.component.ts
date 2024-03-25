import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Mon app</h1>
    <app-navbar />
  `,
  standalone: true,
  imports: [NavbarComponent],
})
export class AppComponent {}
