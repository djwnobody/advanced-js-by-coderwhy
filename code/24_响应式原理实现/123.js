const map = new Map()
const obj1 = {
  name: 'xxx',
  age: 18,
}
const obj2 = {
  name: 'yyy',
  age: 24,
}
const map1 = new Map()
const map2 = new Map()
map1.set('name', 'xxxxxxxxxxx')
map1.set('age', '66666666')
map2.set('name', 'yyyyyyyyyyyy')
map2.set('age', '66666666')
map.set(obj1, map1)
map.set(obj2, map2)
const obj1Name = map.get(obj1).get('name')
console.log(obj1Name)
console.log(map)
