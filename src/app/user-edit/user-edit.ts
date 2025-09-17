import { Component, effect, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit {
  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   this.route.snapshot.params['id']
  // }

  id = input()

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }
}
