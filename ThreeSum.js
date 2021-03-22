// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      start++;
      continue;
    }
    while (start < end) {
      if (end < nums.length - 1 && nums[end + 1] === nums[end]) {
        end--;
        continue;
      }
      if (nums[i] + nums[start] + nums[end] === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (nums[i] + nums[start] + nums[end] < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
