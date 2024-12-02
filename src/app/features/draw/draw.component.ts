import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  imports: [],
  template: `
    <canvas #refCanvas></canvas>
    <canvas #refCanvas></canvas>
  `
})
export class DrawComponent implements AfterViewInit {
  // @ViewChild('refCanvas') propCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChildren('refCanvas') propCanvas!: QueryList<ElementRef<HTMLCanvasElement>>

   ngAfterViewInit(): void {
     const arrayCanvas = this.propCanvas.toArray()
      for (let canvas of arrayCanvas) {
        const ctx = canvas.nativeElement.getContext('2d')
        if (ctx) {
          ctx.fillStyle = 'blue'
          ctx.fillRect(0, 0, 100, 100)
        }
      }
   }
}
