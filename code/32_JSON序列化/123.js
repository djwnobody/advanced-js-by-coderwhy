const obj = {
  name: 'why',
  age: 18,
  friends: {
    name: 'kobe',
  },
  hobbies: ['篮球', '足球'],
  foo: function () {
    console.log('foo function')
  },
}

const obj6 = JSON.parse(JSON.stringify(obj))
obj.name = 'djw'
console.log(obj6.name)
obj.friends.name = 'djw'
console.log(obj6.friends.name)
