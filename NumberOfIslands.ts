// https://leetcode.com/problems/number-of-islands/submissions/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid: string[][]): number {
  let islandsNum = 0;
  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      if (grid[column][row] === "1") {
        islandsNum++;
        helper(column, row, grid);
      }
    }
  }
  return islandsNum;
};

function helper(column: number, row: number, grid: string[][]): void {
  if (!grid[column] || !grid[column][row] || grid[column][row] !== "1") return;
  grid[column][row] = "2";
  helper(column + 1, row, grid); // vertical down
  helper(column - 1, row, grid); // vertical up
  helper(column, row - 1, grid); // left
  helper(column, row + 1, grid); // right
}

// time O(n)
// space O(1)

//[
// ["1","1","1"],
// ["0","1","0"],
// ["1","1","1"]
// ]
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
