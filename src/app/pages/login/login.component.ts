import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './login.component.html',
  styles: `
    .red {
      color: red;
    }

    .green {
      color: green;
    }

    .bold {
      font-weight: bold;
    }
  `
})
export class LoginComponent /*implements AfterViewInit*/ {
  /*@ViewChild('myForm') form!: NgForm

  ngAfterViewInit(): void {
    console.log(this.form)
  }*/

  css = 'red'

  login(form: NgForm) {
    if (form.invalid) return
    console.log(form.value)
  }
}
