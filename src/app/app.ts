import { Component, signal } from '@angular/core'
import { Draw } from './draw/draw';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
        <!-- <app-draw /> -->
    `,
    imports: [Draw, RouterOutlet]
})
export class App {
    myTitle = signal('test')

    listenSearch(userName: string) {
        console.log(userName)
    }
}