function foo() {
  throw new Error('message')
}
try {
  foo()
} catch (err) {
  // console.log(err) //与下一行一样的效果
  console.log(err.stack)
}
