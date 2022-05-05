Promise.resolve()
  .then(() => {
    console.log(0)
    // 1.直接return一个值 相当于resolve(4)
    // return 4

    // 3.return Promise
    // 不是普通的值, 多加一次微任务
    // Promise.resolve(4), 多加一次微任务
    // 一共多加两次微任务
    return Promise.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })

Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

Promise.resolve().then(() => {
  console.log(66666)
})
// 0
// 1
// 66666
// resolve(4)
// 2

// 1.return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6

// 2.return thenable
// 相较于return 4的输出，4延迟一位
// 0
// 1
// 2
// 4
// 3
// 5
// 6

// 3.return promise
// 相较于return 4的输出，4延迟两位
// 0
// 1
// 2
// 3
// 4
// 5
// 6
