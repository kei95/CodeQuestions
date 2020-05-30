// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function foo(arr) {
  if (arr.length === 1) return arr[0];
  const container = [];
  arr.forEach((num) => {
    const uniqueIndex = container.indexOf(num);
    uniqueIndex === -1 ? container.push(num) : container.splice(uniqueIndex, 1);
  });
  return container[0];
}

console.log(foo([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
