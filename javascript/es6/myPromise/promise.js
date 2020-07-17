// promise A+
function isFunction(v) {
  return typeof v === "function";
}
function MyPromise(asyncFn) {
  this.states = "pending"; //fulfilled  rejected
  this.onFulfilled = []; // 回调函数集合
  this.onRejected = []
  function resolve(v) {
    // fulfilled
    if (this.states === "pending") {
      this.states = "fulfilled";

    }
  }
  function reject(v) {
    // rejected
    if (this.states === "pending") {
      this.states = "rejected";
    }
  }
  asyncFn(resolve.bind(this), reject.bind(this));
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : () => {};
  onRejected = isFunction(onRejected) ? onRejected : null;
  if(this.states === 'pending') {
      this.onFulfilled.push(onFulfilled)
      this.onRejected.push(onRejected)
  }
  return new MyPromise()


};

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('kkks')
    reject("kkk");
  });
});
promise.then(
  (res) => {
    console.log(res, "res")
  },
  (fail) => {
    console.log(fail, "fail");
  }
).then(res => {
    console.log(res, 'two-then')
});
console.log(promise, 'promise')


// const realPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('kkks')
//       reject("kkk");
//     });
//   })
// realPromise.then(
//     (res) => {
//       console.log(res, "res")
//     },
//     (fail) => {
//       console.log(fail, "fail");
//     }
//   ).then(res => {
//       console.log(res, 'two-then')
//   });
//   console.log(realPromise, 'realPromise')