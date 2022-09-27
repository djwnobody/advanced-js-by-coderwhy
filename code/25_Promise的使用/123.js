const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class HYPromise {
  constructor(fn) {
    this.status = PENDING
    this.val = undefined

    const resolve = (val) => {
      if (this.status == PENDING) {
        this.status = RESOLVED
        this.val = val
        queueMicrotask(() => {
          this.onresolved(this.val)
        })
      }
    }
    // Promise内部的resolve、reject方法
    fn(resolve, reject)
  }
  // 原型链上的方法
  then(onresolved, onrejected) {
    this.onresolved = onresolved
    this.onrejected = onrejected
  }
}

const p = new HYPromise((resolve, reject) => {
  console.log('状态pending')
  setTimeout(() => {
    // resolve(1111)
    reject(666)
  }, 1000)
})

p.then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
