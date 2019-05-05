import Store from './../store/store.js'

export default class Component {
    constructor(props = {}) {
        let self = this;
        this.render = this.render || function() {};
        if(props.store instanceof Store) {
            props.store.events.subScribe('stateChange', ()=> self.render());

        }
        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}