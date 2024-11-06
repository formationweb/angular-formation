import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private userService = inject(UserService)
  private builder = inject(FormBuilder)

  user: User = {} as User
  propName = new FormControl()
  myForm = this.builder.group({
    name: this.propName,
    username: '',
    email: ''
  })

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.userService.get(id).subscribe((user) => {
      this.user = user
      //this.propName.setValue(this.user.name)
      this.myForm.patchValue(this.user)
    })
    // const data = this.route.snapshot.data['usersList']
    // console.log(data)
  }
}
