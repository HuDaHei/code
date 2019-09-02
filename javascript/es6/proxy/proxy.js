// 1 自定义基本操作的行为  含义

const someObj = {};
const proxyObj = new Proxy(someObj,{
  get(target,key,receiver) {
   
  }
})
proxyObj.name;