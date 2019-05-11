// 这是一个订阅/发布模块publish/subscribe
export default class PubSbu {
    constructor() {
        this.events = {};
    }
    // event 是String 订阅
    subScribe(event, callback) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }
        return self.events[event].push(callback);
    }
    // 发布
    publish(event, data = {}) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            return []
        }
        console.log("x")
        return self.events[event].map(callback => callback(data));
    }
}