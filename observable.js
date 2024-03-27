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

import { Observable } from "rxjs";

// ob$
//   .pipe(
//     bufferTime(500),
//     map((el) => el.length)
//   )
//   .subscribe((nb) => {
//     console.log(nb);
//   });

const ob$ = new Observable((subscriber) => {
  subscriber.next(Math.random());
  subscriber.next(Math.random());
 // subscriber.error(new Error("mon erreur"));
  subscriber.next(Math.random());
  subscriber.complete()
});

ob$.subscribe({
  next: (nb) => {
    console.log(nb);
  },
  error: (err) => {
    console.log('erreur')
  },
  complete: () => {
    console.log('finish')
  }
});
