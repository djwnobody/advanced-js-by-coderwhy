// await/async
async function foo1() {
  throw new Error('xxx')
}
foo1().catch((err) => {
  console.log(err)
  console.log('-----------')
})
const foo2 = async () => {}

class Foo {
  async bar() {}
}
