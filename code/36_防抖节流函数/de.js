// 前置知识
// let timer = setTimeout(()=>{console.log(123);},1000)
// console.log(timer);
// clearTimeout(timer)
// console.log(timer);

const input = document.querySelector('#input')
const cancel = document.querySelector('#cancel')
function foo(e) {
  console.log('input被触发了', this, e)
  // console.log('input被触发了')
  return 666666
}
// 防抖
function debounce(f, delay, immediate = false, callback) {
  let timer = null
  let flag = false //不能修改参数
  function _debounce(...args) {
    //当事件发生时，浏览器会自动把event传递给_debounce
    if (timer) clearTimeout(timer) // timer为null的两种情况：一开始、很长时间没有操作
    if (immediate && !flag) {
      const result = f.apply(this, args)
      callback(result)
      flag = true
    } else {
      timer = setTimeout(() => {
        const result = f.apply(this, args)
        callback(result)
        timer = null
        flag = true
      }, delay)
    }
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer) //清空timer对应的宏任务
    timer = null
    flag = false
  }
  return _debounce
}
//第三个参数是第一次就执行，或者很长时间没有操作后，事件第一次发生就执行。。。
const deboun = debounce(foo, 2000, true,(res)=>{
  console.log(res);
})
input.oninput = deboun
cancel.onclick = deboun.cancel
