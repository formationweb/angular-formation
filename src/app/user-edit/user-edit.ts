import { Component, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  // private route = inject(ActivatedRoute)
  // id = signal(0)

  // constructor() {
  //    const userId = this.route.snapshot.params['id']
  //    this.id.set(userId)
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
