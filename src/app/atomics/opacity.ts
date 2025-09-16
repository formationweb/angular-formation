import { Component, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-opacity',
    template: `
         <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity" (input)="onChange.emit(opacity())">
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
    color = input('black')
    opacity = model(1)
    onChange = output<number>()
}