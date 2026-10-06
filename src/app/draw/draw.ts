import { Component, effect, ElementRef, viewChild, viewChildren } from "@angular/core";

@Component({
    selector: 'app-draw', // élément hôte
    template: `
        <canvas #canvasRef></canvas>
         <canvas #canvasRef></canvas>
    ` // vue avec ses élément donc éléments enfant de hôte
})
export class Draw {
    // protected readonly canvasEl = 
    //     viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
    protected readonly canvasEl = 
        viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')
    
    constructor() {
        effect(() => {
            const elements = this.canvasEl()
            for (let element of elements) {
                const el = element.nativeElement
                if (el) {
                    const context = el.getContext('2d')
                    if (context) {
                        context.fillStyle = 'blue'
                        context.fillRect(0, 0, 100, 100)
                    }
                }
            }
            
        })
    }
}