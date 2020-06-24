// const xNum = 1;
// function printValue() {
//     console.log(xNum, 'xnumber')
//     return xNum;
// }
// function scopeTest() {
//     const xNum = 2;
//     return printValue;
// }
// const y = scopeTest();// 打印结果是1 说明变量查找规则 在书写的时候就定义好了，跟调用的位置没有关系
// console.log(y())

// const first = function(){
//     // const name = 'nick';
//     // const age = 18;
//     // const second = function () {
//     //     const play = 'ball';
//     //     const name = 'xiaomi'
//     // }
//     // return second
// }
// const clouser = first()
console.log(window);
{
  const x = "k";
  console.log(x, "kkkxsssx");
}
console.log(typeof x, "kkkk");
// console.log(x.age, 'names'); // RHS
// const thatt = clouser();

{
  let test = [] + {};
  console.log(test, "one");
}
{
  // console.log(test, 'tow')
  const test = {} + [];
  console.log(test, "test");
}
{
  const p = [];
  for (var i = 0; i < 10; i++) {
    const x = () => {
        console.log(i)
    };
    p.push(x)

  }
  console.log(p[8](), "outer");
}
{
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i, "outer");
}

{
    let a = []
    let b = {i:0};
    for (let y = b.i; y < 3; y++) {
        a[y] = function () {
            console.log(y, 'y');
        };
    };
   a[0]();
   a[1]();
   a[2]();
}
{
    console.log('----------')
    let a = []
    let b = {i:0};
    for (let y = b.i; y < 3; y++) {
        a[y] = function () {
            console.log(y, 'y');
        };
    };
    const first = function() {
        const x = a[0];
        const y = a[2];
        x()
        y()
    }
    first();
}