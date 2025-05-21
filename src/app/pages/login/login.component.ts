import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../validators/domain.validator';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  propEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass = new FormControl()
  myForm = new FormGroup({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = false

  ngOnInit() {
    //this.propEmail.setValue('test')
  }

  login() {
    this.submitted = true
    if (this.myForm.invalid) return
    console.log(this.myForm.value)
  }
}
