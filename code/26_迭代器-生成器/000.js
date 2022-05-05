// 1.promise四种情况
// const p = new Promise((resolve, reject) => {
//   // resolve(66666)
//   reject(555)
// })
// p.then(
//   (res) => {
//     console.log('res1:', res)
//     throw new Error('err2')
//   },
//   (err) => {
//     console.log('err1:', err)
//     throw new Error('zzzz')
//   }
// ).then(
//   (res) => {
//     console.log('res2:', res)
//   },
//   (err) => {
//     console.log('err2:', err)
//   }
// )

const iterableObj = {
  friends: ['a', 'b', 'c'],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.friends.length) {
          return { done: false, value: this.friends[index++] }
        } else {
          return { done: true }
        }
      },
    }
  },
}
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next()) // { done: false, value: 'a' }

const iterableObj1 = {
  friends: ['a', 'b', 'c'],
  *[Symbol.iterator]() {
    yield* this.friends
  },
}
const generator = iterableObj1[Symbol.iterator]()
console.log(generator.next()) // { value: 'a', done: false }
