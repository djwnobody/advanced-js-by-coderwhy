const promise = new Promise((resolve, reject) => {
  reject('reject message')
})

const newPromise = new Promise((resolve, reject) => {
  reject('xxxxxxxx')
})
promise
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err)
    return newPromise
  })
  .catch((err) => {
    console.log('组合', err)
  })
