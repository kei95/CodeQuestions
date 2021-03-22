function subsets(nums: number[]): number[][] {
  const arr: number[][] = [];
  const currentSub: number[] = [];
  subsetsHelper(0, currentSub, nums, arr);
  return arr;
}

const subsetsHelper = (
  currentIdx: number,
  currentSub: number[],
  nums: number[],
  arr: number[][]
) => {
  const copiedSub = [...currentSub];
  arr.push(copiedSub);

  for (let i = currentIdx; i < nums.length; i++) {
    currentSub.push(nums[i]);
    subsetsHelper(i + 1, currentSub, nums, arr);
    currentSub.pop();
  }
};

console.log(subsets([1, 2, 3]));
