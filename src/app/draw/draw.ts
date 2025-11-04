import { AfterViewInit, Component, effect, ElementRef, OnInit, ViewChild, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
    <canvas #canvasRef></canvas>
  `
})
export class Draw  {
   //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
   canvasArray = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')

   constructor() {
    effect(() => {
      for (let canvasEl of this.canvasArray()) {
        const canvas = canvasEl?.nativeElement
        if (canvas) {
          const context = canvas.getContext('2d')
          if (context) {
            context.fillStyle = 'blue'
            context.fillRect(0, 0, 100, 100)
          }
        }
      }
    })
   }
}
