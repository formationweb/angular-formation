import { Component, computed, effect, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginModel = signal({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel, (path) => {
    required(path.email, {
      message: 'Email obligatoire'
    })
    required(path.password)
    minLength(path.email, 2)
  })
  isInvalid = computed(() => this.loginForm().invalid())
  emailError = computed(() => {
    return this.loginForm.email().errors()[0]?.message
  })

  // constructor() {
  //   effect(() => {
  //       console.log(this.loginModel())
  //   })
  // }

  login(event: SubmitEvent) {
    event.preventDefault()
    console.log(this.loginModel())
  }
}
