// https://leetcode.com/problems/find-peak-element/solution

var findPeakElement = function (nums) {
  return binarySearch(nums, 0, nums.length - 1);
};

function binarySearch(nums, startIdx, lastIdx) {
  if (startIdx === lastIdx) return startIdx;
  const midIdx = Math.floor((startIdx + lastIdx) / 2);
  if (nums[midIdx] > nums[midIdx + 1])
    return binarySearch(nums, startIdx, midIdx);
  return binarySearch(nums, midIdx + 1, lastIdx);
}

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
