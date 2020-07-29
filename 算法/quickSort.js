// 快速排序

const test = [3,5,2,4,3,8,8,6,5,6,66,66,777,33,3,4,66];

function quickSort(arr){
    const arrLen = arr.length
    if( arrLen == 0) {
        return arr
    }
    const pirotIndex=Math.floor(arr.length/2)
    const pirot = arr.splice(pirotIndex,1)[0]
    const left = [];
    const right = [];
    for(let i = arr.length-1; i >= 0; i--) {
        const v = arr[i];
        if( v < pirot) {
            left.push(v)
        }else {
            right.push(v)
        }
    }
    return quickSort(left).concat(pirot, quickSort(right))
}
console.log(quickSort(test));