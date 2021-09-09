// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 0) return [];
  const hashMap: Map<string, number> = new Map();
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const targetDiff: number = target - nums[i];
    const diffInMap: number | undefined = hashMap.get(`${targetDiff}`);
    if (diffInMap !== undefined && diffInMap > -1) {
      res.push(i);
      res.push(diffInMap);
      return res;
    }
    hashMap.set(`${nums[i]}`, i);
  }

  return res;
}

console.log(twoSum([2, 7, 11, 15], 9));
