function a(message) {
  this.message = message
}
a.prototype = {
  constructor: a,
  message: 'prototype',
  eating() {
    console.log(this.message)
  },
}
var p = new a('aaaaa')
p.eating()
