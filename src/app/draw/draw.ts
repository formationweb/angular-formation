import { Component, effect, ElementRef, OnInit, viewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #canvasRef></canvas>
    <canvas #canvasRef></canvas>
  `
})
export class Draw /* implements OnInit */ {
  //canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef')
  canvasEl = viewChildren<ElementRef<HTMLCanvasElement>>('canvasRef')
  //@ViewChildren('canvasRef') canvasEl: ElementRef<HTMLCanvasElement>

  constructor() {
    effect(() => {
      const els = this.canvasEl()
      for (let canvasElement of els) {
        const el = canvasElement.nativeElement
        const context = el.getContext('2d')
        if (context) {
          context.fillStyle = 'blue'
          context.fillRect(0, 0, 100, 100)
        }
      }
    })
  }

  // ngOnInit(): void {
  //   console.log(this.canvasEl())
  // }
}
