var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  },
}

function sayName() {
  person.sayName(); // person: 隐式调用
  (person.sayName)() // ctrl + s保存时自动变成person.sayName()
  ;(b = person.sayName)() // window: 赋值表达式(独立函数调用)
}

sayName()
