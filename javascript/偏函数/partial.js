// 偏函数
function partialF(fn,...pargs) {
  const args = pargs;
  return function(...p) {
    const nArgs = args.concat(p);
    fn.apply(null,nArgs);
  }
}
const someF = (a,b,c) =>{
  console.log(a+b+c, "partialF")
}
const nSomeF = partialF(someF,1,1,3);
nSomeF();
nSomeF(3);
// 柯里化 多元转换为一元
function carryF(func,...args) {
  const nArgs = args;
  const fnLen = func.length;
  // 通过闭包来拆分参数
  return function(...p) {
    const cArgs = nArgs.concat(p);
    if(cArgs.length < fnLen) {
      return carryF.call(null,func,...cArgs);
    }
    else {
      return func.apply(null,cArgs);
    }
  }
}
const add = (a,b,c,d) => {
  console.log(a, "a")
  console.log(b, "b")
  console.log(c, "c")
  console.log(d, "d")
  console.log(a +b +c+d, "cadryF")
}
const nAdd = carryF(add,10);
nAdd(1,1,1);