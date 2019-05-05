// 这是一个订阅/发布模块publish/subscribe
export default class PubSbu {
    constructor() {
        this.events = {};
    }
    // event 是String
    subScribe(envnt, callback) {
        let self = this;
        if(!self.events.hasOwnProperty(envnt)) {
            self.events[event] = [];
        }
        return self.events[event].push(callback);
    }
    publish(event, data = {}) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            return []
        }
        return self.events[event].map(callback => callback(data));
    }
}