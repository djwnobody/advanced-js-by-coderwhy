Array.prototype.hyslice = function (start, end) {
  var arr = this
  start = start || 0
  end = end || arr.length
  var newArr = []
  for (var i = start; i < end; i++) {
    newArr.push(arr[i])
  }
  return newArr
}
console.log([1, 2, 3].hyslice(1, 3))
