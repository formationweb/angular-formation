import { AfterViewInit, Component, effect, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
  `
})
export class Draw  {
   canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')

   constructor() {
    effect(() => {
      const canvas = this.canvasEl()?.nativeElement
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          context.fillStyle = 'blue'
          context.fillRect(0, 0, 100, 100)
        }
      }
    })
   }
}
