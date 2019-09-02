//调度中心 主要负责注册事件
module.exports = class Publist {
  constructor() {
    this.events = {};
  }
  // 发布
  publish(type,data) {
    let events = []; 
    if(Reflect.has(this.events,type)) {
      events = this.events[type]
    }
    events.forEach(fn => {
      fn(data)
    });
  }
  //订阅
  subscribe(type,fn) {
    if(Reflect.has(this.events,type)) {
      (this.events[type]).push(fn)
    }else {
      this.events[type] = [];
      (this.events[type]).push(fn)
    }
  }
}