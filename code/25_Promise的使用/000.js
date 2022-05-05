const p1 = new Promise((resolve) => {
  resolve(666)
})
p1.then((res) => {
  console.log(res)
  return undefined
}).then((res) => {
  console.log(res)
  return undefined
})
// --------------

