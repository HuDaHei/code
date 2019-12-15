// 纯缓存 函数 不使用闭包
const cache = new Map();
const memor = function(p) {
  if(cache.has(p)) {
    console.log('我从缓存里面取值')
    return cache.get(p)
  }
  const result = p + 10;
  cache.set(p,result);
  console.log('计算得值x')
  return result
}
memor(2)
memor(2)
memor(2)
memor(2)
memor(2)
// 使用闭包
const packMermor = (func) => {
  const cache = new Map();
  return function(p) {
    if(cache.has(p)) {
      console.log("缓存取值")
      return cache.get(p)
    } else {
      console.log('计算得值')
      const result = func.call(null,p);
      cache.set(p,result);
      return result;
    }
  }
}
function add(b){
  return 10 + 2;
}
const newAdd = packMermor(add);
let x = newAdd(2)
let y = newAdd(2)