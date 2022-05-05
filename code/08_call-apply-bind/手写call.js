Function.prototype.hybind = function (thisArg, ...argsArr) {
  var fn = this
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window
  thisArg.fn = fn
  return function () {
    const args = [...argsArr, ...arguments]
    var result = thisArg.fn(...args)
    delete thisArg.fn
    return result
  }
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2)
  return num1 + num2
}

foo.hybind(undefined)()
var newSum = sum.hybind('abc', 20, 30)
var result = newSum()
console.log('hybind:', result)
