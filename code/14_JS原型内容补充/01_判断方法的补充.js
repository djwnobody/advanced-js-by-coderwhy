var obj = {
  name: 'why',
  age: 18,
}
var info = Object.create(obj, {
  address: {
    value: '北京市',
    enumerable: true,
  },
})
var a = Object.create(info, {
  goods: {
    value: '商品',
    enumerable: true,
  },
})

console.log('address' in a) // true
console.log('name' in a) // true

for (var key in a) {
  console.log(key) //goods、address、name、age
}
