


// 流程
// 创建 一个call stack 调用栈
// graFather 进入调用栈 初始化变量对象 此时还有没有执行代码 [代码分析阶段]
// father 进入调用栈 初始化变量对象 
// [[Scopes]] 作用域 保存着 除本执行栈之外的变量引入的变量 

function first() {
  let first = 'first';
  function seconde() {
    let seconde = 'seconde';
    console.log(first, 'seconde')
    function three() {
      let three = 'three';
      const fn = ()=> {
        console.log("fn")
      };
      setTimeout(fn, 2000)
      console.log(seconde, 'three')
    }
    three();
  }
  seconde();
}
first();