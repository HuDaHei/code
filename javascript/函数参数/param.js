// js 函数传入的参数 是一个复杂类型的 那么外部的数据是否也会被改变 在此验证一下
const testParam = {
  name: '嘻嘻',
  age: 18
}
function updateName(people) {
  people.name = '哈哈'
  return people
}
const newPeople = updateName(testParam);
console.log(newPeople)
console.log(testParam)

// 如果重写这个参数对象呢？
const testParamTwo = {
  name: '哦哦'
}
function rewriteParam(param) {
  param = {
    name: '呵呵'
  }
  return param
}
const paramTwo = rewriteParam(testParamTwo);
console.log(testParamTwo)
console.log(paramTwo)
// 根据红宝书里面的解释 就是 当你去重写一个传入的是复杂数据的时候 参数就变成一个局部变量 在函数执行完毕后就销毁了 
// 也可以理解为 当你去重写的时候 其实是新生成一个内存地址 传入的复杂数据的地址被切断了 也就对外部的引用数据没有什么影响