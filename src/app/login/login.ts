import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    Validators.minLength(3)
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
}
