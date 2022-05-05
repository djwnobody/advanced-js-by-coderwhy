async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

/*
script start
async1 start
async2
promise1
promise2
script end
nextTick1
nextTick2
async1 end
promise3
setTimeout0
setTimeout2
setImmediate

宏队列:[s0,s2,sI]
微队列:[n1,a1,n2,p3]
*/

setTimeout(function () {
  console.log('setTimeout0')
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

console.log('script end')
