var obj = { name: 'obj' }
var a = Object.create(obj)
console.log(a.__proto__)
function create(o) {
  function fn() {}
  fn.prototype = o
  return new fn()
}
var b = create(obj)
console.log(b.__proto__)

function create2(o) {
  var a = {}
  Object.setPrototypeOf(a, o)
  return a
}
var c = create2(obj)
console.log(c.__proto__)
