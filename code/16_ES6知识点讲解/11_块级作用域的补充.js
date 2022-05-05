const names = ["abc", "cba", "nba"]

// 不可以使用const
for (const i = 0; i < 2; i++) {
  console.log(i)
}

{
  const i = 0
  console.log(i)
  i++
}

{
  let i = 上面的i
  console.log(names[i])
}


// for...of: ES6新增的遍历数组(对象)
for (const item of names) {
  console.log(item)
}

// {
//   const item = "abc"
//   console.log(item)
// }

// {
//   const item = "cba"
//   console.log(item)
// }

// console.log(item)
