// 基于数组的栈
class Statck {
    constructor(){
        this.statck = [];
    }
    push(v){
      this.statck.push(v);
    }
    pop(){
      return this.statck.pop();
    }
    peek(){
        const len = this.statck.length - 1;
        return len > -1 ? this.statck[len] : ''
    } //返回栈顶元素
    isEmpty(){
        return this.statck.length
    }
    clear(){
        this.statck = [];
    }
    size(){
        return this.statck.length
    }
}
// 基于对象的栈

class StatckForObj {
    constructor(){
        this.items = {};
        this.count = 0;
    }
    push(v){
        this.items[this.count] = v;
        this.count++;
    }
    pop(){
        delete this.items[this.count];
    }
    peek(){}
    isEmpty(){}
    clear(){}
    size(){}
}