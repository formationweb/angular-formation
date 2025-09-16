import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    title = signal('Mon App')
}