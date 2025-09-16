let age = signal(15)
let nom = signal('ana')
let isMinor = computed(() => age() < 18)

age.set(20)