// https://leetcode.com/problems/number-of-islands/submissions/

function numIslands(grid: string[][]): number {
  let islandsNum = 0;
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandsNum++;
        helper(i, j, grid);
      }
    }
  }
  return islandsNum;
}

function helper(row: number, column: number, grid: string[][]): void {
  if (
    row < 0 ||
    column < 0 ||
    row >= grid.length ||
    column >= grid[row].length ||
    grid[row][column] !== "1"
  )
    return;
  grid[row][column] = "2";
  helper(row - 1, column, grid);
  helper(row + 1, column, grid);
  helper(row, column - 1, grid);
  helper(row, column + 1, grid);
}

//time O(n*m)
//space O(1)

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
