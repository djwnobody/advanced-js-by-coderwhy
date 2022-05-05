var arr = [1, 2, 3]
var [a, b, c] = arr
console.log(a, b, c)
var [d, ...newArr] = arr
console.log(newArr)
var [e, f, g = 'aaa'] = arr
console.log(g)
