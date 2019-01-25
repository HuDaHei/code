function context() {
  console.log(this)
  let a = 10;
  let b = function() { let c = 10; };
  let c = 10;
  function son(d) {
    let x = "888"
    console.log(c);
    function fun() {
      console.log("xxxx")
    };
    fun();
  }
  son(5);
  };

context();
console.log(this);

// [[Scopes]] 作用域链
// 注意 只有在下一个环境中 调用了上一个环境中的变量才会形成作用域链 
// 发现一个现象 如何一个变量在子环境中 调用了那么在chrome 中的local 代码分析阶段不会收录这个变量 只在执行的时候收录