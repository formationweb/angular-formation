import { Component, effect, inject, input, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit /*implements OnInit*/ {
  id = input.required({
   // transform: (value: string) => +value
   transform: numberAttribute
  })

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }

  // private route = inject(ActivatedRoute)

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id']
  //   console.log(id)
  // }
}
