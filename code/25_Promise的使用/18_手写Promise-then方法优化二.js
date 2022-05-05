// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 解决链式调用

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  // 太多地方要用到下面的代码
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
    return new HYPromise((resolve, reject) => {
      // 1.如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const value = onFulfilled(this.value)
        //   resolve(value)
        // } catch(err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   const reason = onRejected(this.reason)
        //   resolve(reason)
        // } catch(err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          // try {
          //   const value = onFulfilled(this.value)
          //   resolve(value)
          // } catch(err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedFns.push(() => {
          // try {
          //   const reason = onRejected(this.reason)
          //   resolve(reason)
          // } catch(err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }
}

const promise = new HYPromise((resolve, reject) => {
  console.log('状态pending')
  // resolve(1111) // resolved/fulfilled
  reject(2222)
  // throw new Error("executor error message")
})

// 调用then方法多次调用
promise
  .then(
    (res) => {
      console.log('res1:', res)
      return 'aaaa'
      // throw new Error("err message")
    },
    (err) => {
      console.log('err1:', err)
      return 'bbbbb'
      // throw new Error("err message")
    }
  )
  .then(
    (res) => {
      console.log('res2:', res)
    },
    (err) => {
      console.log('err2:', err)
    }
  )

/*
p1 = promise
p2 = promise.then()
p3 = promise.then().then()
1.reject内部把修改p1状态、执行p1的回调放到微队列
2.promise.then()往p1身上添加两个回调；promise.then().then()往p2身上添加两个回调
3.执行第1步的微任务,修改p1状态为rejected,执行p1的失败回调,return 'bbbbb',进入14行,resolve('bbbbb'),实参resolve是64行,也就是p2的resolve
4.resolve内部把修改p2状态、执行p2的回调放到微队列
5.执行第4步的微任务,修改p2状态为fulfilled,执行p2的成功回调,return undefined,因为后面没有点了,所以不用分析了
*/
