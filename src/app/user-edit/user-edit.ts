import { Component, effect, input, numberAttribute } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-edit',
  styleUrl: './user-edit.css',
  templateUrl: './user-edit.html',
})
export class UserEdit {
  readonly id = input.required({
    transform: numberAttribute
  })

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }
}
