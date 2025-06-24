import { Component, effect, ElementRef, OnChanges, OnDestroy, OnInit, viewChild, viewChildren } from "@angular/core";

@Component({
    selector: 'app-draw',
    template: `
        <canvas #refCanvas></canvas>
        <canvas #refCanvas></canvas>
    `
})
export class Draw /*implements OnInit*/ {
    //elCanvas = viewChild<ElementRef<HTMLCanvasElement>>('refCanvas')
    elCanvas = viewChildren<ElementRef<HTMLCanvasElement>>('refCanvas')
    // @ViewChild('refCanvas') elCanvas

    constructor() {
        effect(() => {
            // const el = this.elCanvas()?.nativeElement
            // const context = el?.getContext('2d')
            // if (context) {
            //     context.fillStyle = 'blue'
            //     context.fillRect(0, 0, 100, 100)
            // }
            for (let el of this.elCanvas()) {
                const context = el?.nativeElement.getContext('2d')
                if (context) {
                    context.fillStyle = 'blue'
                    context.fillRect(0, 0, 100, 100)
                }
            }
        })
    }

    // ngOnInit() {
        
    // }
}