// 数字
const someNum:number = 0;
//字符串
const someStr:string = '';
//数组
  //传统型
  const list:number[] = [];
  //泛型
  const listF:Array<number> = [];
// 元组==> 也是数组，其实就是数组可以包含指定的字类数据, 后续插入的数据必须是声明开始中的一种 不然你就GG
const tList:[string,number,object] = ['',0,{}];
tList.push({})

// 枚举 列出某些有穷序列集的所有成员的程序，或者是一种特定类型对象的计数
enum weekday {
  monday = 1,
  wesdata = 2
}
const day:weekday = weekday.monday;
// any 防止报错 ，预估未来可能的值
console.log(day, 'day')
let someAny: any = {};
someAny = ''
// 类型断言 就是你明确的知道某个值是啥子类型 但是 typescript 推断的有误的  为了不报错 就使用断言来消除
// xx as type