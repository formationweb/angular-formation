import { Component, effect, ElementRef, OnInit, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
    <canvas #canvasRef></canvas>
  `,
})
export class Draw {
  //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
  canvasEl = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef');

  constructor() {
    effect(() => {
      for (let canvasEl of this.canvasEl()) {
        const el = canvasEl?.nativeElement;
        if (el) {
          const context = el.getContext('2d');
          if (context) {
            context.fillStyle = 'blue';
            context.fillRect(0, 0, 100, 100);
          }
        }
      }
    });
  }
}
