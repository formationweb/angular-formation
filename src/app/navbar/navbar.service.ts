import { Injectable, Service, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
//@Service() // depuis angular 22
export class NavbarService {
    title = signal('Mon App')
}