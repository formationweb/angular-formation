let age = signal(25)
let isMinor = computed(() => age() < 18)

console.log(isMinor()) // false

age.set(5)

console.log(isMinor()) // true
