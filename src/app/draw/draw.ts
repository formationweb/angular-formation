import { Component, effect, ElementRef, OnInit, viewChild, viewChildren } from "@angular/core";

@Component({
    selector: 'app-draw',
    template: `
        <canvas #canvasRef></canvas>
        <canvas #canvasRef></canvas>
    `
})
export class Draw  {
    //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
    canvasEls = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')

    constructor() {
       effect(() => {
            for (let canvasEl of this.canvasEls()) {
                const el = canvasEl.nativeElement
                if (el) {
                    const context = el.getContext('2d')
                    if (context) {
                        context.fillStyle = 'red'
                        context.fillRect(0, 0, 100, 100)
                    }
                }
            }
       })
    }
}