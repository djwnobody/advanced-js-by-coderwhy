function deepClone(obj) {
  // const newObj = obj instanceof Object ? {} : [] // 不能用这个，因为无法区分数组和对象
  const newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    console.log(typeof key)
    if (typeof obj[key] === 'object') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
const obj = {
  name: 'djw',
  friends: ['Amy', 'Tom'],
  item: {
    name: 'tv',
    price: 2000,
  },
}
const newObj = deepClone([1, 2, 3])
console.log(newObj)
// console.log(typeof obj.friends) //object
// console.log(typeof obj.item)
// const obj6 = { ...obj }
obj.friends.push('djw')
console.log(newObj.friends.includes('djw'))
