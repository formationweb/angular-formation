import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
     @if (loading) {
      <article aria-busy="true"></article>
     }
     @else {
      <ng-content />
     }
  `
})
export class LoaderComponent {
  @Input() loading = false
}
