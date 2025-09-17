import { bufferTime, interval, map, Observable, of } from "rxjs";

const ob$ = interval(1000)

const subscription = ob$.subscribe(console.log)

subscription.unsubscribe()
