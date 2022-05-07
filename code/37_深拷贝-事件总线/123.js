class hyEventBus {
  constructor() {
    this.eventBus = {}
  }
  on(event, eventCallback, thisArg) {
    if (!this.eventBus[event]) this.eventBus[event] = []
    this.eventBus[event].push({ eventCallback, thisArg })
  }
  emit(event,...args){
    this.eventBus[event].forEach(item=>{
      item.eventCallback.apply(item.thisArg,args)
    })  
  }
  off(event,eventCallback){
    this.eventBus[event].forEach((item,index) => {
      if(item.eventCallback===eventCallback){
        this.eventBus[event].splice(index,1)
      }
    }) 
  }
}


const eventBus = new hyEventBus()
eventBus.on(
  'abc',
  function () {
    console.log('监听abc1', this)
  },
  { name: 'why' }
)

const handleCallback = function () {
  console.log('监听abc2', this)
  console.log('----------');
}
eventBus.on('abc', handleCallback, { name: 'why' })

// utils.js
eventBus.emit('abc', 123)

// 移除监听
eventBus.off('abc', handleCallback)
eventBus.emit('abc', 123)
