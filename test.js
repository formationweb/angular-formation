let age = signal(20)
let isMinor = computed(() => age() < 18)
let nom = signal('ana')

effect(() => {
    console.log(age())
})

effect(() => {
    console.log(nom())
})

age.set(25)
nom.set('ben')