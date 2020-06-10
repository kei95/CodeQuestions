// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function foo(array) {
  if (array[0].length === 0) return [];
  let currentIndex = 0;
  let currentArrIndex = 0;
  let remainStep = array[0].length ** 2;
  let returnArr = [];
  return getNextRound(
    array,
    currentIndex,
    currentArrIndex,
    returnArr,
    remainStep,
    "right"
  );
}

function getNextRound(
  array,
  currentIndex,
  currentArrIndex,
  returnArr,
  round,
  direction
) {
  if (round === 0) return returnArr;
  let nextNum = null;
  switch (direction) {
    case "right":
      nextNum =
        !!array[currentArrIndex][currentIndex + 1] &&
        array[currentArrIndex][currentIndex + 1] > 0 &&
        array[currentArrIndex][currentIndex + 1];
      direction = !nextNum || nextNum < 1 ? "down" : "right";
      returnArr.push(array[currentArrIndex][currentIndex]);
      array[currentArrIndex][currentIndex] = 0;
      nextNum ? currentIndex++ : currentArrIndex++;
      round--;
      return getNextRound(
        array,
        currentIndex,
        currentArrIndex,
        returnArr,
        round,
        direction
      );
    case "down":
      nextNum =
        currentArrIndex + 1 < array.length &&
        array[currentArrIndex + 1][currentIndex] > 0 &&
        array[currentArrIndex + 1][currentIndex];
      direction = !nextNum || nextNum < 1 ? "back" : "down";
      returnArr.push(array[currentArrIndex][currentIndex]);
      array[currentArrIndex][currentIndex] = 0;
      nextNum ? currentArrIndex++ : currentIndex--;
      round--;
      return getNextRound(
        array,
        currentIndex,
        currentArrIndex,
        returnArr,
        round,
        direction
      );
    case "back":
      nextNum =
        currentIndex - 1 >= 0 &&
        array[currentArrIndex][currentIndex - 1] > 0 &&
        array[currentArrIndex][currentIndex - 1];
      direction = !nextNum || nextNum < 1 ? "up" : "back";
      returnArr.push(array[currentArrIndex][currentIndex]);
      array[currentArrIndex][currentIndex] = 0;
      nextNum ? currentIndex-- : currentArrIndex--;
      round--;
      return getNextRound(
        array,
        currentIndex,
        currentArrIndex,
        returnArr,
        round,
        direction
      );
    case "up":
      nextNum =
        currentArrIndex - 1 >= 0 &&
        array[currentArrIndex - 1][currentIndex] > 0 &&
        array[currentArrIndex - 1][currentIndex];
      direction = !nextNum || nextNum < 1 ? "right" : "up";
      returnArr.push(array[currentArrIndex][currentIndex]);
      array[currentArrIndex][currentIndex] = 0;
      nextNum ? currentArrIndex-- : currentIndex++;
      round--;
      return getNextRound(
        array,
        currentIndex,
        currentArrIndex,
        returnArr,
        round,
        direction
      );
  }
}

console.log(
  foo([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
