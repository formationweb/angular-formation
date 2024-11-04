import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [],
  template: `
    <canvas #refCanvas></canvas>
    <canvas #refCanvas></canvas>
    <button (click)="drawSquare()">Dessiner un carré</button>
  `
})
export class DrawComponent implements AfterViewInit {
  @ViewChild('refCanvas') propCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChildren('refCanvas') allCanvas!: QueryList<ElementRef<HTMLCanvasElement>>

  ngAfterViewInit(): void {
  }

  drawSquare() {
    const array = this.allCanvas.toArray()
    for (let elCanvas of array) {
      const context = elCanvas.nativeElement.getContext('2d')
      if (!context) return
      context.fillStyle = 'blue'
      context.fillRect(0, 0, 100, 100)
    }
  }
}
