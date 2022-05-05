var obj = {
  name: 'why',
  age: 18,
  height: 1.88,
}

var { name: newName, age, height, address: newA = '北京' } = obj
console.log(newName, age, height, newA)
// 对象的解构: {}
// var { name, age, height } = obj
// console.log(name, age, height)

// var { age } = obj
// console.log(age)

// var { name: newName } = obj
// console.log(newName)

// var { address: newAddress = '广州市' } = obj
// console.log(newAddress)

// function foo(info) {
//   console.log(info.name, info.age)
// }

// foo(obj)

// function bar({ name, age }) {
//   console.log(name, age)
// }

// bar(obj)
