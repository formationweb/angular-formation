import { signal, effect, computed } from '@signe/reactive'









const name = signal('ana')
const age = signal(15)
const isMinor = computed(() => age() < 18)
const fullName = computed(() => name() + ' Test')

effect(() => {
    console.log(fullName())
})