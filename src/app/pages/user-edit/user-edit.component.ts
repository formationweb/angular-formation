import { Component, input, Input, numberAttribute, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
 // @Input() id = ''
 id = input(0, {
  transform: numberAttribute
 })

  ngOnInit(): void {
    console.log(this.id())
  }
}
