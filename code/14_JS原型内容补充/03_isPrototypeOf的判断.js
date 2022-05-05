function Person() {}

var p = new Person()

// console.log(p instanceof Person)
// console.log(Person.prototype.isPrototypeOf(p))

//
var obj = {
  name: 'why',
  age: 18,
}

var info = Object.create(obj)
var a = Object.create(info)
// console.log(info instanceof obj)
console.log(obj.isPrototypeOf(a))
console.log(obj.isPrototypeOf(info))
