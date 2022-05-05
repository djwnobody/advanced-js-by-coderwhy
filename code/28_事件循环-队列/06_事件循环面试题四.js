async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

setTimeout(function () {
  console.log('setTimeout0')
  process.nextTick(() => console.log('nextTick6666'))
}, 0)

setImmediate(() => console.log('setImmediate'))

setTimeout(function () {
  console.log('setTimeout2')
}, 0)

process.nextTick(() => console.log('nextTick1'))

async1()

process.nextTick(() => console.log('nextTick2'))

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nexttick1
// nexttick2
// async1 end
// promise3
// settimetout0
// setImmediate
// setTimeout2
