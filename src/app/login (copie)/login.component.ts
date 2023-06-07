import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
  styles: [
    `
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    `
  ]
})
export class LoginComponent {
  //@ViewChild('myform') form!: NgForm

  login(form: NgForm) {
    if (form.invalid) {
      return
    }
    console.log(form.value)
  }
}
