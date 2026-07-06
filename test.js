const age = signal(15)
const isMinor = computed(() => age() < 18)

console.log(isMinor()) // true

age.set(70)

console.log(isMinor()) // false

effect(() => {
    console.log(age())
})