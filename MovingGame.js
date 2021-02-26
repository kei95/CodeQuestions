//https://paiza.jp/career/challenges/62/retry?tk=bb76a77d7bba0329022dd8a63d06285a
const b = ["5 4", "2", "2", "4", "9"];
const b2 = ["5 4", "4", "9", "6", "3"];

function foo(b) {
  const firstLine = b[0].split(" ");
  const movements = b.splice(1, b.length);
  const blocks = firstLine[0];
  let remainBlocksR = parseInt(blocks, 10);
  let remainBlocksB = parseInt(blocks, 10);
  const path = "";
  let resultArr = [];
  Eel(remainBlocksR, remainBlocksB, movements, path, 0, resultArr);
  console.log(resultArr);
  return;
}

// 5 5 [4, 9, 6, 3]

function Eel(remainBlocksR, remainBlocksB, movements, path, round, resultArr) {
  if (round === movements.length) return resultArr.push(path);
  if (resultArr.length > 0) return;
  const currentMovement = parseInt(movements[round], 10);
  if (remainBlocksR - currentMovement > -1) {
    const newRemainBlockR = remainBlocksR - currentMovement;
    const newRemainBlockB = remainBlocksB + currentMovement;
    const newPath = `${path}R`;
    Eel(
      newRemainBlockR,
      newRemainBlockB,
      movements,
      newPath,
      round + 1,
      resultArr
    );
  }
  if (remainBlocksB - currentMovement > -1) {
    const newRemainBlockR = remainBlocksR + currentMovement;
    const newRemainBlockB = remainBlocksB - currentMovement;
    const newPath = `${path}L`;
    Eel(
      newRemainBlockR,
      newRemainBlockB,
      movements,
      newPath,
      round + 1,
      resultArr
    );
  }
}

foo(b);
