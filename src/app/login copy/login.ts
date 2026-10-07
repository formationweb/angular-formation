import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  styles: `
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    .bold {
      font-weight: bold;
    }
  `
})
export class Login {
  login(form: NgForm) {
      if (form.invalid) return
      console.log(form.value)
  }
}
