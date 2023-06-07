import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: User = {} as User
  subscription!: Subscription
  propName: FormControl = new FormControl()
  form: FormGroup = this.builder.group({
    name: this.propName,
    username: '',
    email: ''
  })
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    /*this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.userService.get(id).subscribe((user: User) => {
        this.user = user
      })
    })*/
    this.subscription = this.route.params
      .pipe(
        switchMap((params: Params) => {
          const id = params['id']
          return this.userService.get(id)
        }),
      )
      .subscribe((user: User) => {
        this.user = user
       // this.propName.setValue(this.user.name)
       this.form.patchValue(this.user)
      })
  }

  edit() {

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe() // intéressant uniquement si le flux tourne en arrière plan
  }
}
