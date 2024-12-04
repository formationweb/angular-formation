import { interval } from 'rxjs'

const subscription = interval(1000).subscribe({
  next: (nb) => {
    console.log(nb)
  },
  error: (err) => {
    console.log(err)
  }
})

subscription.unsubscribe()