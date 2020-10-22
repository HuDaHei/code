// promise 是一个构造函数

// 立即执行函数 executor 带有resolve 和 reject 俩个参数

// 链式调用

function MyPromise( executor ) {
    this.onFulfilled = [];
    this.onRejected = [];
    this.status = 'pending'
    const resolve = (v)=> {
        if(this.status === 'pending') {
            this.status = 'FulFilled';
            this.onFulfilled.forEach(fun => {
                setTimeout(()=> {
                    const x = fun(v);
                })
            })
        }
    };
    const reject = (v)=> {
        if(this.status === 'pending') {
            this.status = 'Rejected';
            this.onRejected.forEach(fun => {
                setTimeout(()=> {
                    const x = fun(v);
                })
            })
        }
    }
    if(executor instanceof Function) {
        executor(resolve, reject);
    }
};
const abstractPromiseOperate = (promise, x) => {
    if(promise === x) {
        return console.error('x === promise in abstractPromiseOperate')
    };
    if( x instanceof MyPromise) {

    }
    if(x instanceof Object) {
        if(x.status === 'pending') {
            x.then(function(v){
                abstractPromiseOperate(promise, v)
            }, (v)=> { console.error(v)})
        }else {
            ab
        }
    }

}
MyPromise.prototype.then = function(onFulfilled,onRejected){
    let promise = null;
    if(onFulfilled instanceof Function) {
        this.onFulfilled.push(onFulfilled);
    }
    if(onRejected instanceof Function) {
        this.onRejected.push(onRejected);
    }
    return new MyPromise()
}

const myPromise = new MyPromise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('kkk')
    }, 1000)
});
myPromise.then((res)=> {
    console.log(res, 'res')
}, ()=> {});