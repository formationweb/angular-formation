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
  propEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com'),
  ])
  propPass = new FormControl()
  form = new FormGroup({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = signal(false)

  login() {
    this.submitted.set(true)
    console.log(this.form.value)
  }


}
