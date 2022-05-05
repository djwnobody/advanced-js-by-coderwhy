const names = ['abc', 'cba', 'nba', 'mba', NaN]

if (names.indexOf('abc') !== -1) {
  console.log('abc有')
}
if (names.indexOf(NaN) !== -1) {
  console.log('NaN有')
}
if (names.includes(NaN)) {
  console.log('NaN存在')
}

// if (names.indexOf('cba') !== -1) {
//   console.log('包含abc元素')
// }

// // ES7 ES2016
// if (names.includes('cba', 1)) {
//   console.log('包含abc元素')
// }

// if (names.includes(NaN)) {
//   console.log('包含NaN')
// }
