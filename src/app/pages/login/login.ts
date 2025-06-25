import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../core/validators/domain';

interface LoginForms {
  email: FormControl<string | null>
  password: FormControl<string | null>
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  propEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass = new FormControl('')
  form = new FormGroup<LoginForms>({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = signal(false)

  constructor() {
    this.propEmail.setValue('...')
  }

  login() {
    this.submitted.set(true)
    if (this.form.invalid) return
    console.log(this.form.value.email)
  }
}
