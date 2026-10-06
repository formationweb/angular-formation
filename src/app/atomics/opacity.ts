import { Component, effect, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-opacity',
    imports: [FormsModule],
    template: `
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
           [(ngModel)]="opacity"
        />
        <div [style]="{ opacity: opacity(), backgroundColor: color() }"></div>
    `,
    styles: `
        div {
            width: 100px;
            height: 100px;
            background-color: black;
            opacity: 1;
        }
    `
})
export class Opacity {
    opacity = model(1)
    color = input('black')
    onChange = output<number>()

    constructor() {
        effect(() => {
            this.onChange.emit(this.opacity())
        })
    }
}