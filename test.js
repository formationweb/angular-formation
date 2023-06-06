class MyPromise {
    constructor(cb) {
        const resolve = () => {
            console.log('résolu !!!')
        }
        const reject = () => {
            console.log('rejeté !!!')
        }
        cb(resolve, reject)
    }
}

const promise = new MyPromise((resolv, rejec) => {
   rejec()
})