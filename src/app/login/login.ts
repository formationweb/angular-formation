import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../core/validators/domain';

type LoginForm = {
  email: FormControl<string | null>
  password: FormControl<string>
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  propEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass = new FormControl()
  myForm = new FormGroup<LoginForm>({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = signal(false)

  login() {
    this.submitted.set(true)
    if (this.myForm.invalid) return
    console.log(this.myForm.value)
  }

  constructor() {
    setTimeout(() => {
      this.propEmail.setValue('test')
    }, 1000)
  }
}
