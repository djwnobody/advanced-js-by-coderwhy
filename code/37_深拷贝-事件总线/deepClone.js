function isObject(value) {
  const type = typeof value
  return (type === 'object' || type === 'function') && type !== null
  // 前面有4种：obj、arr、null、function；最后排除掉null
}

function deepClone(origin, map = new Map()) {
  // 如果是基本类型/函数，直接返回
  if (!isObject(origin) || typeof origin === 'function') return origin
  // 解决循环引用
  if (map.has(origin)) {
    return map.get(origin)
  }
  //下面的origin只能是obj、arr
  const newObject = Array.isArray(origin) ? [] : {}
  map.set(origin, newObject)
  for (const key in origin) {
    newObject[key] = deepClone(origin[key], map)
  }
  //for...in遍历不到Symbol的key
  const symbolKeysArr = Object.getOwnPropertySymbols(origin)
  for (let sKey of symbolKeysArr) {
    newObject[sKey] = deepClone(origin[sKey], map)
  }
  return newObject
}
const s1 = Symbol()
const obj = {
  name: 'why',
  age: 18,
  friend: {
    name: 'james',
    address: {
      city: '广州',
    },
  },
  // 数组类型
  hobbies: ['abc', 'cba', 'nba'],
  // 函数类型
  foo: function (m, n) {
    console.log('foo function')
    console.log('100代码逻辑')
    return 123
  },
  // Symbol作为key
  [s1]: 'abc',
}
obj.a = obj
const obj6 = deepClone(obj)
console.log(obj6)
obj.friend.name = 'djw'
