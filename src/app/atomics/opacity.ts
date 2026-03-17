import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opacity',
  template: `
    <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity" (input)="onChange.emit(opacity())" />
    <div [style]="{ backgroundColor: color(), opacity: opacity() }"></div>
  `,
  styles: `
    div {
      width: 100px;
      height: 100px;
      opacity: 1;
    }
  `,
  imports: [FormsModule]
})
export class Opacity {
    opacity = model(1)
    color = input('black')
    onChange = output<number>()
}
