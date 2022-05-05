function* foo() {
  console.log('函数开始执行~')

  const value1 = 100
  console.log('第一段代码:', value1)
  yield

  const value2 = 200
  console.log('第二段代码:', value2)
  yield

  const value3 = 300
  console.log('第三段代码:', value3)
  yield

  console.log('函数执行结束~')
}

const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
