import { signal, computed, effect } from "@signe/reactive";







let age = signal(42)
let name = signal('ana')
let isMinor = computed(() => age() < 18)
let fullName = computed(() => name() + ' dupont')

effect(() => {
    console.log(fullName())
})

age.set(12)
