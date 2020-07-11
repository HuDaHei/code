function reverserInt(num) {
    if(typeof num !== 'number') {
        console.error('请输入数值类型')
        return 
    }
    const sign = Math.sign(num);
    const numAbsStr = Math.abs(num) + '';
    const reverseNum = numAbsStr.split('').reverse().join('');
    const result =  sign > 0 ? parseInt(reverseNum,10):0 - parseInt(reverseNum,10);
    if(result <= Number.MAX_SAFE_INTEGER || result >= Number.MIN_SAFE_INTEGER ) {
        return result
    }else {
        return 0
    }
}
console.log(reverserInt('1230'));
console.log(reverserInt(-1232342342342340));