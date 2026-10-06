let age = signal(25)
let isMinor = computed(() => age() < 18)
//let isMinor = signal(true)

console.log(isMinor()) // false

age.set(5)

console.log(isMinor()) // true


effect(() => {
  console.log(age())
})