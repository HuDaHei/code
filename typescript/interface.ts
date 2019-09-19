// 接口 ===> 对值所具有的结构进行类型检查
// 作用 ===> 为代码提供契约

// 说明 调用pringtlabe 需要一个带有label的对象 且lable后面是一个字符串类型 才行
function printLabel(labelConfig:{label: string}) {
  console.log(labelConfig, 'labelConfig')
}
const someLabel = {label: "label"};
printLabel(someLabel)

// 重写 上面的例子 通过接口
// 添加一个可选属性 ?
// 添加一个只读属性
// ???可读属性的思考 在传统的js里面对象都是可修改的,如果一个对象设置成readonly那么是否可以修改呢
// 不可以修改
// 如果是一个数组呢 数组是可以的
interface labelSon {
  readonly address: number[];
}
interface labelConfig{
  label: string;
  name?: string; // 可选属性 标识符 就是问号?
  readonly age: number; // 只读属性 标识返 readonly 
  readonly info: labelSon;
}
function printLabelInterFace(labelConfig:labelConfig) {
  console.log(labelConfig)
  console.log(labelConfig.age);
  (labelConfig.info).address.push(1)
}

const someLabelInter = {
  label: 'label',
  age: 18,
  info: {
    address: []
  }
}
printLabelInterFace(someLabelInter)
//额外的属性检查 ===> 如果传入的属性 跟接口对不上 就会报错 
// 如果要可能会带入一些额外的属性 可以使用字符串索引签名
// 
interface SquareConfig{
  color?: string;
  width?: number;
[propName: string]: any // 字符串索引签名
}
function createSquare(config: SquareConfig) {

}
const mySquate = createSquare({color:"red",width:100, coloou: "blue"})

// 函数类型 接口
// 就是对应的函数的参数类型 和函数返回类型一致 就行了
interface someFunc{
  (param:string,paramT:string): boolean;
}
let someF: someFunc
someF = function(w:string,t:string):boolean {
  return Boolean(0)
}
// 可索引类型
  // 就是给复杂类型的的value定义类型 比如对象的value 或者数组的index
  // 支持俩种索引
  // 字符串索引
  // 数字索引
  interface complexData {
    [index: number] : string
  }
  let someD: complexData;
  someD = ['22','ll']
  let soemC:Object = someD[1]