import { Component, computed, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormField]
})
export class Login {
  protected readonly loginModel = signal({
    email: '',
    password: ''
  })

  emailUppercase = computed(() => this.loginModel().email.toUpperCase())
  formInvalid = computed(() => this.loginForm().invalid())

  loginForm = form(this.loginModel)

  loginSubmit(event: Event) {
    event.preventDefault()
  }
}
