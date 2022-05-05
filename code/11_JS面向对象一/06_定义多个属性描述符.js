var obj = {
  // 私有属性(js里面是没有严格意义的私有属性)
  // 开发者约定，以_开头的数据就是私有数据。
  // 下面的想法是错误的：因为可以打印obj._age，所以_age就不是私有数据。
  _eating: function () {},
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  },
  _age: 18,
}

Object.defineProperty(obj, 'age', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._age
  },
  set: function (value) {
    this._age = value
  },
})
Object.defineProperties(obj, {
  // name: {
  //   configurable: true,
  //   enumerable: true,
  //   writable: true,
  //   value: "why"
  // },
  // age: {
  //   configurable: true,
  //   enumerable: true,
  //   get: function () {
  //     return this._age
  //   },
  //   set: function (value) {
  //     this._age = value
  //   },
  // },
})

obj.age = 19
console.log(obj.age)

console.log(obj)
