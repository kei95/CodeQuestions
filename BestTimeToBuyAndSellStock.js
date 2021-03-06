// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

function foo(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}

console.log(foo([7, 1, 5, 3, 6, 4]));
