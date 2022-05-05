function* foo(m) {
  console.log('传给foo的实参', m)
  const n = yield m

  console.log('传给第二段代码的数据', n)
  const q = yield n

  console.log('函数执行结束~', q)
}

// 生成器上的next方法可以传递参数
const generator = foo(1)
console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next(6)) // { value: 6, done: false }
console.log(generator.next(666)) // { value: undefined, done: true }
