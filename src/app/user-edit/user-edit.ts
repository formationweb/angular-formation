import { Component, effect, inject, input, numberAttribute, OnInit } from '@angular/core';
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

  id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }
}
