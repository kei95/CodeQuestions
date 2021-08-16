// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  let isIncrementDone: boolean = false;

  for (let i: number = digits.length - 1; i >= 0; i--) {
    if (isIncrementDone) {
      return digits;
    }
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) digits.unshift(1);
    } else {
      digits[i] += 1;
      i;
      isIncrementDone = true;
    }
  }

  return digits;
}

// time O(n)
// space 1

// [1,0,0,0]
console.log(plusOne([9, 9, 9]));
