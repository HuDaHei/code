let start = "我是原始数据类型";
let reference = {
    "name": "我的头可不是面团捏的",
    "age": 18,
    "both": "2017-3-3"
};
let arr = [];
let num = 3093.9
let nu = null;
let unde = undefined;
let obj = new Object();
let str = new String("我是谁");
console.log(obj);
console.log(reference.toString());
console.log(num.toString());
// console.log(unde.toString());//报错 
// console.log(nu.toString()); //报错

//  new 出来的基本数据都是引用类型 
console.log(typeof start)
console.log(typeof str)
console.log(str)
console.log(typeof reference)
console.log(typeof arr)
console.log(typeof num)
console.log(typeof nu)
console.log(typeof unde)
// string
// object
// object
// number
// object
// undefined
console.log("instanceof")
console.log(start instanceof String)
console.log(str instanceof String)
console.log(reference instanceof Object)
console.log(nu instanceof Object)
console.log(unde instanceof Object)