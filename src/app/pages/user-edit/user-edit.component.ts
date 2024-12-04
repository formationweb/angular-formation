import {
  Component,
  inject,
  input,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { User } from '../../core/interfaces/user';
import { UsersService } from '../../core/services/users.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  private usersService = inject(UsersService);
  private builder = inject(FormBuilder)

  form = this.builder.group({
    email: '',
    name: '',
    username: ''
  })

  // @Input() id = ''
  id = input(0, {
    transform: numberAttribute,
  });

  user = {} as User;

  ngOnInit(): void {
    this.usersService.get(this.id()).subscribe((user) => {
      this.user = user
      //this.form.get('email')?.setValue(user.email)
      this.form.patchValue(this.user)
    });
  }
}
