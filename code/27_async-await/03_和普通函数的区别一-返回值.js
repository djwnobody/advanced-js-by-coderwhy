async function foo() {
  // 3.返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hehehehe')
    }, 2000)
  })
}

foo().then((res) => {
  console.log('promise then function exec:', res)
})
