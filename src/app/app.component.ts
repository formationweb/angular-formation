import { Component } from '@angular/core'
import { ClickService } from './core/services/click.service';
import { bufferTime, map } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
       <router-outlet />
    `
})
export class AppComponent {
    constructor(clickService: ClickService) {
        clickService.simulate()
            .pipe(
                bufferTime(500),
                map(el => el.length)
            )
            .subscribe({
                next: (letter: any) => {
                    console.log(letter)
                },
                error: (err) => {
                    console.log(err)
                },
                complete: () => {
                    console.log('terminé')
                }
            })
    }
}