import Store from './../store/store.js'

export default class Component {
    constructor(props = {}) {
        let self = this;
        this.render = this.render || function() {};
        if(props.store instanceof Store) {
            console.log("我是否是store的实例", props)
            props.store.events.subScribe('stateChange', ()=> {
                self.render();
                console.log("我渲染了")
            });

        }
        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}