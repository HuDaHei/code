const testInput = [
    [1, 0, 0, 1, 0],
    [1, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1],
    [1, 0]
  ];
  // eg 10
// 位运算
10010 = 18
101 =5
00101 = 5
10101 = 21 
1111 = 15
111111 = 63
1 = 1
10 = 2

const testInputs = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1],
  ];
  // eg 5 
  10010 = 18
  10110 = 22
  11110 = 30
  101 = 5
  00101 = 5
  10101 = 21
  1011 = 11

  // 奇数必有一个位置相同
  // 同理偶数必有一个相同位置
  // 奇数和偶数也有可能有相同位置
  // 计算偶数最多位置
  // 计算奇数最多位置
  
  function computedSamePositionNum(arr = []) {
    const len = arr.len - 1;
    const en = [];
    const on = []; // 奇数
    for(let i = len; len >= 0; i--) {
        const temp = arr[i];
        const tempLastNum = temp.slice(-1);
        if(tempLastNum > 0) {
            // 奇数
            on.push(temp)
        }else {
            // 偶数
            en.push(temp)
        }
    }
  }