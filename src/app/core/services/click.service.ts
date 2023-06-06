import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClickService {
    simulate() {
        return new Observable(subscriber => {
            console.log('go')
            setTimeout(() => {
                subscriber.next('A')
            }, 100)
            setTimeout(() => {
                subscriber.next('B')
            }, 200)
            setTimeout(() => {
                subscriber.next('C')
            }, 300)
            setTimeout(() => {
                subscriber.next('D')
                subscriber.complete()
            }, 3000)
        })
    }
}