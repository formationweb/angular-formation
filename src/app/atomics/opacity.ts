import { Component, computed, effect, input, model, OnInit, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-opacity',
    template: `
         <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity">

         {{ percentOpacity() }}

         <div [style]="{ backgroundColor: color(), opacity: opacity()  }"></div>
    `,
    styles: `
        div {
            width: 100px;
            height: 100px;
        }
    `,
    imports: [FormsModule]
})
export class Opacity {
    color = input.required()
    opacity = model(1)
    onChange = output<number>()
    percentOpacity = computed(() => Math.round(this.opacity() * 100) + '%')

    constructor() {
        setTimeout(() => {
            this.opacity.set(0.5)
        }, 2000)
        effect(() => {
            this.onChange.emit(this.opacity())
            console.log(this.percentOpacity())
        })
        effect(() => {
            console.log(this.color())
        })
    }
}