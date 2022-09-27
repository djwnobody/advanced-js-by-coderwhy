// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => {
          this.value = value
          this.onFulfilled(this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason)
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const promise = new HYPromise((resolve, reject) => {
  console.log('状态pending')
  setTimeout(() => {
    resolve(1111)
  }, 1000)
  // reject(2222)
})

// 调用then方法
// promise.then(res => {
//   console.log("res1:", res)
//   return 1111
// }, err => {
//   console.log("err:", err)
// }).then(res => {
//   console.log("res3:", res)
// })

promise.then(
  (res) => {
    console.log('res1:', res)
  },
  (err) => {
    console.log('err2:', err)
  }
)
