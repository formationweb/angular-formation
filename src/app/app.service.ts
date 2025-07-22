import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppModel {
    readonly title = signal('')
}