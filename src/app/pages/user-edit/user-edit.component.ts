import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  builder = inject(FormBuilder);
  user: User = {} as User;

  propEmail = new FormControl<string>('');
  form: FormGroup = this.builder.group({
    email: this.propEmail,
    name: '',
    username: '',
  });

  ngOnInit(): void {
    this.userService.getAll().subscribe(); // pour l'exercice
    const userId = this.route.snapshot.params['userId'];
    this.userService.get(userId).subscribe((user: User) => {
      this.user = user;
      //this.propEmail.setValue(this.user.email)
      this.form.patchValue(this.user);
    });
  }
}
