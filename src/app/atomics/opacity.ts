import { Component, input, model } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-alpha-range',
    template: `
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity">
        <div class="preview" [style]="{ backgroundColor: color(), opacity: opacity() } "></div>
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
    opacity = model(1)
    color = input('black')
}