// 原型式继承
// 顾名思义 像原型一样去继承 
// 其实原型式继承 是采用增强一个中间对象(构造函数)的方式去继承，这个方式 就是通过原型去增强
// 当然原型继承的缺点 原型式也有 就是引用对象共享的问题
/**
 * 
 * @param {object} son 就是需要被继承的对象
 */
function likePrototype(son) {
  function F(){}
  F.prototype = son;
  return new F();
}
const father = {
  name: 'han',
  colors: [],
  say(){
    console.log(this.name)
  }
}
const instances = likePrototype(father);
const instancess = likePrototype(father);
instances.say()
instances.colors.push('hah')
console.log(instancess.colors)