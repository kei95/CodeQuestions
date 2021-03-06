// https://leetcode.com/problems/two-sum/submissions/

function foo(nums, target) {
  if (!nums || nums.length === 0) return [];
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    const subNum = target - nums[i];
    if (dic[`${subNum}`] in nums) return [i, dic[`${subNum}`]];
    dic[`${nums[i]}`] = i;
  }
  return [];
}

console.log(foo([2, 7, 11, 15], 9));
