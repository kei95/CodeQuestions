const input = [4, 6, 14, 25, 55];

function foo(lines) {
  const slicedLines = lines.slice(" ");
  const inputAmount = slicedLines.shift();
  const res = [];

  helper([], slicedLines, res, inputAmount);
  res.sort((a, b) => {
    return a - b;
  });
  res.splice(0, 0, res.length);
  res.forEach((e) => console.log(e));
}

function helper(readArr, queuedArr, res, inputNum) {
  if (res.length === 0) res.push(0);
  if (
    readArr.length === inputNum ||
    (readArr.length <= inputNum && queuedArr.length === 0)
  ) {
    if (readArr.length > 0) {
      const sum = readArr.reduce((a, b) => {
        return parseInt(a, 10) + parseInt(b, 10);
      }, 0);
      if (res.indexOf(sum) === -1 && sum < 101) {
        res.push(sum);
      }
    }
  } else {
    helper([...readArr, queuedArr[0]], queuedArr.slice(1), res, inputNum);
    helper(readArr, queuedArr.slice(1), res, inputNum);
  }
}

// function SubSets(read, queued, res) {
//   if (read.length === 4 || (read.length <= 4 && queued.length == 0)) {
//     if (read.length > 0) {
//       var total = read.reduce(function (a, b) {
//         return a + b;
//       }, 0);

//       if (res.indexOf(total) === -1) {
//         res.push(total);
//       }
//     }
//   } else {
//     SubSets(read.concat(queued[0]), queued.slice(1), res);
//     SubSets(read, queued.slice(1), res);
//   }
// }

foo(input);
