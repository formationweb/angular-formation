import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../core/validators/domain.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  propEmail = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass = new FormControl<string>('')
  myForm = new FormGroup({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = false

  ngOnInit(): void {
    //this.propEmail.setValue('test')
  }

  login() {
    this.submitted = true
    if (this.myForm.invalid) return
    console.log(this.myForm.value)
    setTimeout(() => {
      this.submitted = false
    }, 1000)
  }
}
