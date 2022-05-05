setTimeout(function () {
  console.log('setTimeout1')
  new Promise(function (resolve) {
    resolve()
  }).then(function () {
    new Promise(function (resolve) {
      resolve()
    }).then(function () {
      console.log('then4')
    })
    console.log('then2')
  })
})
/* 
promise1
2
then1
queueMicrotask1
then3
setTimeout1
then2
then4
setTimeout2

宏队列:[s1,s2]
微队列:[t1,q1,t3]、
*/
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('then1')
})

setTimeout(function () {
  console.log('setTimeout2')
})

console.log(2)

queueMicrotask(() => {
  console.log('queueMicrotask1')
})

new Promise(function (resolve) {
  resolve()
}).then(function () {
  console.log('then3')
})
