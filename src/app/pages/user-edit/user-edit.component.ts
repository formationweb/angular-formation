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
      // patchValue fait une modification partielle des valeurs, contrairement à setValue qui fait une modification totale. Dans ce cas, on utilise patchValue pour ne modifier que la valeur de l'email, name et username, et on laisse les autres valeurs inchangées.
      this.form.patchValue(this.user);
    });
  }

  edit() {
    // userClose est une copie de l'objet user, avec les valeurs de l'objet form
    // on utilise l'opérateur spread ("..."") pour copier les valeurs de l'objet user dans un nouvel objet, puis on copie les valeurs de l'objet form dans le nouvel objet
    const userClone = {
      ...this.user,
      ...this.form.value
    }
    this.userService
      .update(this.user.id, this.form.value)
      .subscribe((userModified: User) => {
        this.user = userModified
      })
  }
}
