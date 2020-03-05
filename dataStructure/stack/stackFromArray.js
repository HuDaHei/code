 // 栈 一种先进后出的有序集合
 class StackFromArray {
   constructor() {
     this.items = []
   }
   // 添加元素
   push(v) {
     this.items.push(v)
   }
   // 删除最后一个元素
   pop() {
     this.items.pop();
   }
   // 查看最后一个元素
   peek() {
     const len = this.items.length;
     return this.items[len - 1]
   }
   // 检查栈是否为空
   isEmpty() {
     return this.items.length === 0
   }
   // 清空栈
   clear() {
     this.items = [];
   }
 }
 // 简单的使用
 const stackFraomArrayInstance = new StackFromArray();
 stackFraomArrayInstance.push(1)
 stackFraomArrayInstance.push(2)
 stackFraomArrayInstance.push(3)
 stackFraomArrayInstance.push(4)

 console.log(stackFraomArrayInstance);
 stackFraomArrayInstance.pop();
 console.log(stackFraomArrayInstance);
 const  lastV = stackFraomArrayInstance.peek();
 console.log(lastV)
 const isEmpty = stackFraomArrayInstance.isEmpty();
 console.log(isEmpty)
stackFraomArrayInstance.clear();
const isEmptyAfter = stackFraomArrayInstance.isEmpty();
console.log(isEmptyAfter)