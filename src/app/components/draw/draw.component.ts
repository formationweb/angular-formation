import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
    <canvas #canvasRef></canvas>
    <button (click)="drawRectangle()">Dessiner rectangle bleu</button>
  `,
})
export class DrawComponent {
  //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef');
  canvasEl = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef');

  drawRectangle() {
    for (let canvasEl of this.canvasEl()) {
      const element = canvasEl.nativeElement;
      const ctx = element?.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 100, 200);
      }
    }
  }
}
