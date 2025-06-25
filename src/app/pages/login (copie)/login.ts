import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 // form = viewChild<ElementRef<HTMLFormElement>>('refForm')

  login(form: NgForm) {
    if (form.invalid) return
    console.log(form.value)
  }
}
