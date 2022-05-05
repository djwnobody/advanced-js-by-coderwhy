function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.showName = function () {
  console.log(this.name)
}
// const p = new Person('djw', 24)
// p.showName()
// 模仿new
function imitateNew() {
  const constructor = arguments[0]
  const obj = new Object()
  ;[].splice.call(arguments, 0, 1)
  // console.log(arguments) //[Arguments] { '0': 'djw', '1': 24 }
  constructor.apply(obj, arguments)
  obj.__proto__ = constructor.prototype
  return obj
}
const p1 = imitateNew(Person, 'djw', 24)
console.log(p1)
p1.showName()
