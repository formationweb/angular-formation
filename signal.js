import { signal, computed, effect } from "@signe/reactive";





const age = signal(42)
const name = signal('ana')
const city = signal('Lyon')
const isMinor = computed(() => age() < 18)

effect(() => {
    console.log(isMinor())
})

age.set(43)

