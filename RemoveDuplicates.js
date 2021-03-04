// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

function foo(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let cutCounter = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        break;
      }
      cutCounter++;
    }
    nums.splice(i, cutCounter);
  }
  return nums.length;
}

foo([1, 1]);
