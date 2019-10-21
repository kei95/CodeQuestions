var findLHS = function(nums) {
    let count = {};
    let lengthOfHS = 0;

    for(let i = 0; i < nums.length; i++){
        count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1
        if(count[nums[i]+1]) lengthOfHS = Math.max(lengthOfHS, count[nums[i]] + count[nums[i] + 1]);
        if(count[nums[i]-1]) lengthOfHS = Math.max(lengthOfHS, count[nums[i]] + count[nums[i] - 1]);
    }

    return lengthOfHS
};

console.log(findLHS([1,3,2,2,5,2,3,7]))





























// let count = {};
// let res = 0;

// for (let i = 0; i < nums.length; i++) {
//     count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
//     if (count[nums[i]+1]) res = Math.max(res,count[nums[i]] + count[nums[i]+1]);
//     if (count[nums[i]-1]) res = Math.max(res,count[nums[i]] + count[nums[i]-1]);
// };

// return res;