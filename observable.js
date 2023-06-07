import { Observable, combineLatest, forkJoin, interval, of, switchMap } from "rxjs";

/*
const ob1$ = of(1, 2, 3)
const ob2$ = of('a', 'b')

ob1$.pipe(
    switchMap((nb) => {
        console.log('----', nb)
        return ob2$
    })
).subscribe((val) => {
    console.log(val)
})*/

const ob1$ = of(1, 2, 3)
const ob2$ = of('a', 'b')

forkJoin([ ob1$, ob2$ ]).subscribe((array) => {
    console.log(array)
})