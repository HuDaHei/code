// 箭头函数 和 传统函数 在闭包下的区别
const name = '我是一名嘻嘻';
const someArrow = {
  name: "我是一名哈哈",
  getName: function() {
    return function() {
      console.log(this.name)
    }
  }
}
someArrow.getName()() // undefined
const someTri = {
  name: "我是一名哈哈",
  getName: () => {
    const that = this;
    return function() {
      console.log(that.name)
    }
  }
}
someTri.getName()(); //undefined