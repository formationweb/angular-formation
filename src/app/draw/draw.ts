import { Component, effect, ElementRef, viewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
    <canvas #canvasRef></canvas>
  `
})
export class Draw {
   //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
   canvasEl = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')

   constructor() {
     effect(() => {
       const arrayEl = this.canvasEl()
       for (let el of arrayEl) {
        const context = el.nativeElement.getContext('2d')
        if (context) {
          context.fillStyle = 'blue'
          context.fillRect(0, 0, 100, 100)
        }
       }
     })
   }
}
