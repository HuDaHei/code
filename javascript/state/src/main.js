import store from './store/index.js'
import Count from './js/component/count.js'
import List from './js/component/list.js'
import Statu from './js/component/status.js'

const formElement = document.querySelector('.js-form')
const inputElement = document.querySelector('#new-item-field')

formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    let value = inputElement.value.trim();
    if(value.length) {
        console.log("我执行了");
        store.dispatch('addItem', value);
        inputElement.value = "";
        inputElement.focus();
    }
})

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Statu();

countInstance.render()
listInstance.render()
statusInstance.render()