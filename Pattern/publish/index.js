// import Publist from './pub.js'
const Publist = require('./pub.js')
class Father {
  constructor(params) {
    let self = this;
    self.events = new Publist();
    self.state =new Proxy(params.state, {
      set(state,key,value) {
        self.events.publish('stateChange',{name:'names'})
      }
    })

  }
} 
const state = {
  state:  {
    name: '哈哈'
  }
}
const instance = new Father(state);
instance.events.subscribe('stateChange', (val) => {
  console.log(val)
})
instance.state.name = '嘻嘻'

