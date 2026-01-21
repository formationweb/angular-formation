import { Component, computed, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginSignal = signal({
    email: '',
    password: ''
  })

  loginForm = form(this.loginSignal)

  formValue = computed(() => this.loginForm().value())

  constructor() {
    effect(() => {
      console.log(this.loginForm().invalid())
    })
  }

  login(event: any) {
      event.preventDefault();
     console.log(this.loginForm().value())
  }
}
