function defineReactive(data,key,value,cb) {
    Object.defineProperty(data,key,{
        get(){
            return value
        },
        set() {
            cb();
        }
    })
}

//将数据变成响应式
function observe(data,cb) {
    Object.keys(data).forEach(key => {
        defineReactive(data,key, data[key],cb)
    })
}

class Vue {
    constructor(option){
        this._data = option.data;
        observe(this._data,option.render)
    }
}
const data = {
    name: 'Vue'
}
new Vue({
    data: data,
    render: function(){
        console.log(this, 'this')
    }
});
setTimeout(()=>{
    data.name = 'newVue'
},3000)