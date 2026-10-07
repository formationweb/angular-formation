import { bufferTime, interval, map, Observable, of } from "rxjs";

// const ob$ = new Observable((subscriber) => {
//   console.log("go");
//   setTimeout(() => {
//     subscriber.next("A");
//   }, 100);
//   setTimeout(() => {
//     subscriber.next("B");
//   }, 200);
//   setTimeout(() => {
//     subscriber.next("C");
//   }, 300);
//   setTimeout(() => {
//     subscriber.next("D");
//     subscriber.complete();
//   }, 3000);
// });

// ob$
//     .pipe(
//         bufferTime(500),
//         map(arrayLetters => arrayLetters.length)
//     )
//     .subscribe((nb) => {
//         console.log(nb)
//     })

const subscription = interval(1000).subscribe(console.log)
subscription.unsubscribe()