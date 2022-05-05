
async function async1() {
  console.log('async1 start')
  await async2() // await可以换成yield
  console.log('async1 end')
}





async function async1() {
  console.log('async1 start')
  new Promise(() => {
    async2()
  }).then(() => {
    console.log('async1 end')
  })
}

async function async2() {
  console.log('async2')
}
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

宏队列:[s,]
微队列:[a1,p2]
*/
console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})

console.log('script end')

// async原理
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

function* getData() {
  const res1 = yield requestData('why')
  // const res2 = yield requestData(res1 + 'aaa')
  // const res3 = yield requestData(res2 + 'bbb')
  // const res4 = yield requestData(res3 + 'ccc')
  console.log(res1, '*********')
}
const generator = getData()
generator.next().value.then((res) => {
  //这里在处理async面试题，便于理解
  generator.next(res)
})
async function bar() {
  console.log('返回一个promise')
}
async function foo() {
  await bar() //这里得到一个promise
  console.log('我被放到微队列')
}
