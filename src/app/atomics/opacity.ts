import { Component, computed, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-alpha-range',
    template: `
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="opacity" (input)="changeOpacity()">
        <p>{{ opacityStr() }}</p>
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
    opacityStr = computed(() => this.opacity() * 100 + '%')
    color = input('black')
    handleChange = output<number>()

    changeOpacity() {
        console.log(this.opacityStr())
        this.handleChange.emit(this.opacity())
    }
}