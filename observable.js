import { bufferTime, catchError, filter, interval, map, Observable, of, tap } from "rxjs";

const ob$ = interval(1000)

const subscription = ob$.subscribe((nb) => {
    console.log(nb)
  })

subscription.unsubscribe()
