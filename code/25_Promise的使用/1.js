// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    const defaultOnRejected = (err) => {
      throw err
    }
    onRejected = onRejected || defaultOnRejected

    const defaultOnFulfilled = (value) => {
      return value
    }
    onFulfilled = onFulfilled || defaultOnFulfilled

    return new HYPromise((resolve, reject) => {
      // 1.如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        if (onRejected)
          this.onRejectedFns.push(() => {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }

  static resolve(value) {
    return new HYPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new HYPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
    return new HYPromise((resolve, reject) => {
      const values = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (err) => {
            reject(err)
          }
        )
      })
    })
  }

  static allSettled(promises) {
    return new HYPromise((resolve) => {
      const results = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
            if (results.length === promises.length) {
              resolve(results)
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err })
            if (results.length === promises.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }

  static race(promises) {
    return new HYPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          }
        )
      })
    })
  }
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1111)
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222)
  }, 20000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3333)
  }, 3000)
})
// HYPromise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
// 1.HYPromise.allSettled([p1, p2, p3])
// 进入128行,遍历[p1, p2, p3],给p1身上添加then的两个回调,但不执行。注意：then方法只是给promise对象身上添加回调,真正的执行在resolve内部。
// 2.then(res => { console.log(res)})
// 给HYPromise.allSettled身上添加一个回调
// 3.执行p1的宏任务,resolve,执行p1身上的成功回调，也就是129行


setTimeout(()=>{
  console.log(a); //1s之后,打印1
},1000)
const a = 1