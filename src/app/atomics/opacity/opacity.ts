import { Component, computed, effect, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opacity',
  imports: [FormsModule],
  template: `
    <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity" />
    <div [style]="{ backgroundColor: color(), opacity: opacity() }"></div>
    <p>{{ percent() }}</p>
  `,
  styles: `
    div {
      width: 100px;
      height: 100px;
    }
  `
})
export class Opacity {
  opacity = model(1)
  color = input('black')
  onChange = output<number>()
  percent = computed(() => Math.round(this.opacity() * 100) + '%')

  constructor() {
    effect(() => {
      this.onChange.emit(this.opacity())
    })
  }
}
