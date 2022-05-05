// const clickHandler = () => {
//   console.log("window发生了点击")
// }

// window.addEventListener("click", clickHandler)
// window.removeEventListener("click", clickHandler)

window.addEventListener('djw', () => {
  console.log('djw')
})

const hi = document.querySelector('#hi')
hi.onclick = function () {
  window.dispatchEvent(new Event('djw'))
}
