import { Injectable, Service, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
//@Service()
export class NavbarService {
    title = signal('mon App')
}