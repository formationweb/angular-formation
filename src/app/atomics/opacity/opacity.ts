import { Component, computed, effect, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opacity',
  imports: [FormsModule],
  template: `
    <input type="range" min="0" max="1" step="0.01" 
      [(ngModel)]="opacity" />
    <div [style]="{ backgroundColor: color(), opacity: opacity() }"></div>
    {{ percentStr() }}
  `,
  styles: `
    div {
        width: 100px;
        height: 100px;
    }
  `
})
export class Opacity {
  color = input('black')
  opacity = model(1)
  onChange = output<number>()
  percentStr = computed(() => this.opacity() * 100 + '%')
  count = signal(0)

  constructor() {
    // effect(() => {
    //   this.onChange.emit(this.opacity())
    // })
    setInterval(() => {
      this.count.set(this.count() + 1)
      // this.count.update(c => c + 1)
    }, 1000)
  }
}
