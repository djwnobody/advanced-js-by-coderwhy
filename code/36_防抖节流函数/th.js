function throttle(f, interval, options = { leading: true, trailing: false }) {
  const {leading,trailing} = options
  let before = 0
  function _throttle(...args) {
    const now = new Date().getTime()
    // 如果leading为false,取消第一次执行
    if (!leading && !before) {
      before = now
    }
    const gap = now - before
    if (gap >= interval) {
      f.apply(this, args)
      before = now
    }
  }
  _throttle.cancel = function () {}
  return _throttle
}
function foo(e) {
  console.log('事件回调执行啦！', this, e)
}
const inputEl = document.querySelector('#input')
const cancelEl = document.querySelector('#cancel')
inputEl.oninput = throttle(foo, 10000)
