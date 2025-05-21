import { Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, UserUpdatePayload } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private userService = inject(UserService)
  private builder = inject(FormBuilder)
  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id'] as string
  //   console.log(id)
  // }

  id = input.required({
   // transform: (value: string) => +value
   transform: numberAttribute
  })
  userEdit = signal<User>({} as User)
  propEmail = new FormControl()
  myForm = this.builder.group({
    email: this.propEmail,
    username: '',
    name: ''
  })

  // userEdit = rxResource({
  //   request: () => this.id(),
  //   loader: ({ request }) => {
  //     return this.userService.get(request)
  //   }
  // })
  
  ngOnInit() {
    this.userService.get(this.id()).subscribe({
      next: (user) => {
        this.userEdit.set(user)
        //this.propEmail.setValue(user.email)
        this.myForm.patchValue(user)
      },
      error: (error) => {
        
      }
    })
  }

  edit() {
    this.userService.update(
        this.id(), 
        this.myForm.value as UserUpdatePayload
    ).subscribe((userModified) => {
      this.userEdit.set(userModified)

      // Fusion d'objets
      // this.userEdit.set({
      //   ...this.userEdit(),
      //   ...userModified
      // })
    })
  }
}
