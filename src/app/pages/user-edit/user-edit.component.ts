import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  route = inject(ActivatedRoute)
  userService = inject(UserService)
  user: User = {} as User

  ngOnInit(): void {
      const userId = this.route.snapshot.params['userId']
      this.userService.get(userId).subscribe((user: User) => {
        this.user = user
      })
  }
}
