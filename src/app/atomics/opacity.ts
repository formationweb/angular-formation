import { Component, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-opacity-range',
    imports: [FormsModule],
    template: `
        <input type="range" 
            [(ngModel)]="opacity" 
            (input)="changeOpacity.emit(opacity())" 
            min="0" 
            max="1" 
            step="0.01">
        <div [style.opacity]="opacity()" [style.backgroundColor]="color()"></div>
    `,
    styles: `
        div {
            width: 100px;
            height: 100px;
        }
    `
})
export class OpacityRange {
    opacity = model(1)
    color = input('black')
    changeOpacity = output<number>()
}