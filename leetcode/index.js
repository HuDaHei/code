var twoSum = function(nums, target) {
    const result = [];
    for(let i = nums.length; i >= 0;i--) {
        const t = target - nums[i];
        const index = nums.indexOf(t);
        if(index != -1 && !result.length) {
           result.push(i)
           result.push(index)
        }
    }
    return result;
};
console.log(twoSum([2,7,11,15], 9))