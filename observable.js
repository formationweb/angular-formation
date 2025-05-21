import { bufferTime, interval, map, Observable, of } from 'rxjs'

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


const ob$ = interval(1000)

const subscription = ob$.subscribe((nb => {
  console.log(nb)
}))

subscription.unsubscribe()