let age = signal(15)
let isMinor = computed(() => age() < 18) // true

effect(() => {
    console.log(isMinor()) // true, false
})

console.log(isMinor()) // true

age.set(19)

console.log(isMinor()) // false
