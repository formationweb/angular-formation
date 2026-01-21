import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../core/validators/domain';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  passControl = new FormControl('')
  form = new FormGroup({
    email: this.emailControl,
    password: this.passControl
  })
  submitted = signal(false)

  login() {
    this.submitted.set(true)
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}
