import PubSub from './../pubsub';
export default class Stroe {
    constructor (params) {
        let self = this;
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';
        self.events = new PubSub();
        if(params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }
        if(params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }
        // 代理对象 进行监听
        self.state = new Proxy(params.state, {
            set: (state,key,value) =>{
                state[key] = value;
                self.events.publish('stateChange',self.state);
                if(self.status !== 'mutation') {
                    console.warn('应该使用mutation 来设置')
                }
                self.status = 'resting';
                return true;
            }
        })
    }
    // dispatch 用于执行action 
    dispatch(actionkey, payload) {
        let self = this;
        if(typeof self.actions[actionkey] !== 'function') {
            console.error(`Action${actionkey} 不存在`);
            return false;
        }
        console.groupCollapsed(`action${actionkey}`)
        self.status = 'action';
        self.actions[actionkey](self,payload);
        console.groupEnd();
        return true;
    } 
    // commit 用于执行 mutatins
    commit(mutationKey, payload) {
        let self = this;
        if(typeof self.mutations[mutationKey] !== 'function') {
            console.error(`mutationKey${mutationKey} 不存在`);
            return false;
        }
        self.status = 'mutation';
        let newState = self.mutations[mutationKey](self.state, payload);
        self.state = Object.assign(self.state, newState);
        return true;
    }
}