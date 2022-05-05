var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

var f = new obj.foo()

