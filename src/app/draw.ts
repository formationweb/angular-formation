import { AfterViewInit, Component, effect, ElementRef, OnInit, viewChild, viewChildren } from "@angular/core";

@Component({
    selector: 'app-draw',
    template: `
        <canvas #canvasRef></canvas>
        <canvas #canvasRef></canvas>
    `
})
export class Draw {
    //protected readonly canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
     protected readonly canvasEl = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')

    constructor() {
        effect(() => {
            const elements = this.canvasEl()
            for (let elCanvas of elements) {
                const el = elCanvas.nativeElement
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