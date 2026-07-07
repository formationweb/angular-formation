import { Component, input, model, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-opacity',
    template: `
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity" (input)="onChange.emit(opacity())" />
        <div [style]="{ opacity: opacity(), backgroundColor: color() }"></div>
    `,
    imports: [FormsModule],
    styles: `
        div {    
            width: 100px;    
            height: 100px;
        }
    `
})
export class Opacity {
    readonly opacity = model(1)
    readonly color = input('black')
    readonly onChange = output<number>()
}