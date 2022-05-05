Promise.resolve()
  .then(() => {
    console.log(0)
    // return {
    //   then: function (resolve) {
    //     resolve(4)
    //   },
    // }
    // return Promise.resolve(4)
    return 4
  })
  .then((res) => {
    console.log(res)
  })
/* 
0
1
4
2
3
5
6
微队列:[1,4]
*/
Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })
