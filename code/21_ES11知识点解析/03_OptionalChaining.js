const info = {
  name: 'why',

  friend: {
    girlFriend: {
      name: 'hmm',
    },
  },
}

// console.log(info.friend.girlFriend.name)
// if (info && info.friend && info.friend.girlFriend) {
//   console.log(info.friend.girlFriend.name)
// }

// ES11提供了可选链(Optional Chainling)
console.log(info.friend?.girlFriend?.name) //使用可选链，下面代码依然执行
console.log(info.frineds?.getName())
console.log(info.myChild2?.getMsg())
console.log('其他的代码逻辑')
