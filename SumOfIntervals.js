// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  let set = new Set();

  for (let i = 0; i < intervals.length; i++) {
    const firstNum = intervals[i][0];
    const secondNum = intervals[i][1];
    for (let f = firstNum; f < secondNum; f++) {
      set.add(f);
    }
  }

  return set.size;
}

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // => 9
