import { signal, computed } from '@signe/reactive'






const age = signal(17)
const isMinor = computed(() => age() < 18)

age.set(19)

console.log(isMinor())