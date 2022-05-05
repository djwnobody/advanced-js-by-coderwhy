async function foo() {
  // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
  throw new Error('error message')
}

foo().catch((err) => {
  console.log('coderwhy err:', err)
  console.log('-----------')
})
