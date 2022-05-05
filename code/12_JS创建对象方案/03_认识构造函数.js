function person(name) {
  this.name = name
  this.eating = function () {
    console.log("I'm eating")
  }
}
console.dir(person)
var p = new person('djw')
console.log(p)
