function Judge(option) {
    this._judgeObj = option;
}
//判断订单状态 是否是1 或者2 
Judge.prototype.judgeOrderStatus = function() {
    const status = Reflect.get(this._judgeObj, 'orderStatus')+'';
    const statusSet = ['1','2'];
    if(statusSet.includes(status)){
        return Promise.resolve({
            "orderStatus": true
        })
    }else {
        return Promise.reject({
            "orderStatus": false
        })
    }
}
Judge.prototype.money = function() {
    console.log('money')
}

//
const row = {
    orderStatus: '3'
}
const JudgeRow = new Judge(row);
Promise.all([JudgeRow.judgeOrderStatus()]).then(res=> {
    console.log(res)
}).catch(err=> {
    console.log(err, 'err')
})