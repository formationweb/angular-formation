import { Component, computed, effect, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alpha-range',
  imports: [FormsModule],
  template: `
    <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity">
    <span>{{ percentOpacity() }}</span>
    <div [style]="{ opacity: opacity(), backgroundColor: color() }"><div>
  `,
  styles: `
      div {
        width: 100px;
        height: 100px;
      }
  `
})
export class AlphaRangeComponent {
  opacity = model(1)
  color = input('black')
  onChange = output<number>()
  percentOpacity = computed(() => Math.round(this.opacity() * 100) + '%')

  constructor() {
    setTimeout(() => {
      this.opacity.set(0.5)
    }, 3000)

    effect(() => {
      this.onChange.emit(this.opacity())
      console.log(this.percentOpacity())
    })
  }
  
}
