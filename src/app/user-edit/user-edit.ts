import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private route = inject(ActivatedRoute)
  id = signal('')

  constructor() {
    const userId = this.route.snapshot.paramMap.get('id')
    if (userId) this.id.set(userId)
  }
}
