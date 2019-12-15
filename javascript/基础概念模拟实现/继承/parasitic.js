// 寄生式继承
// 寄生---一种生物生活在另一种生物的体内或体外， 并从后者获取营养以维持生活的现象{百度翻译}
// 式--一个中间构造函数 比如原型式
// 寄生式 继承就是通过 将被继承对象挂着到一个中间对象上 来实现继承
// 缺点函数不能复用 类似于构造函数
function parasitic(original){
  const F = Object.create(original); // 中间对象 只要能产生一个对象就行 比如构造函数 工厂函数 都可以
  F['say'] = function(){ // 增强对象
    console.log(this.name, 'name')
  }
  return F
}
const fa = {
  name: 'han'
}
const instaces = parasitic(fa);
instaces.say()