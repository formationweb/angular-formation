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

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  private usersService = inject(UsersService);

  // @Input() id = ''
  id = input(0, {
    transform: numberAttribute,
  });

  user = {} as User;

  ngOnInit(): void {
    this.usersService.get(this.id()).subscribe((user) => {
      this.user = user
    });
  }
}
