import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../core/validators/domain.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [ReactiveFormsModule]
})
export class Login {
  emailField = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  passField = new FormControl('')
  form = new FormGroup({
    email: this.emailField,
    password: this.passField
  })
  submitted = signal(false)

  login() {
    this.submitted.set(true)
    console.log(this.form.value)
  }

  test() {
    this.emailField.setValue('...')
  }
}
