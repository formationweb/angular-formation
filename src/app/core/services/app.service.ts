import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private _title = signal('Mon App')
    title = this._title.asReadonly()

    setTitle(str: string) {
        this._title.set(str)
    }
}