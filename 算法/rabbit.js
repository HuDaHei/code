// const computedRabbit = function(month) {
//     if(month < 3) {
//         return 2;
//     }

// }
const sort = function (arr) {
    const len = arr.length;
    for(let i = 0; i< len ; i++) {
        for(let j = i + 1; j < len; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    };
    return arr;
}
const list = [231,123,888,111,2,3,55,100,29,1121,0,-1,312];

const find = function(list , x, y) {
    const newList = sort(list);
    console.log(newList)
    const newY = newList[y];
    if(newY > x) {
        return newY
    }else {
        return x;
    }
}
console.log(find(list, 20, 2))