import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
    `,
    imports: [RouterOutlet]
    //standalone: true // obligatoire avant Angular 19
})
export class AppComponent {}