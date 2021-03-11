// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [[]];
  helper(0, result, root);
  return result;
}

const helper = (level: number, nodes: number[][], root: TreeNode | null) => {
  // level starts from 0(root)
  // odd = right to left
  // even = left to right
  if (!root) return;
  const traverse: number = root.val;
  const isRight = level % 2 !== 0;
  !nodes[level] && nodes.push([]);
  if (isRight) {
    nodes[level].unshift(traverse);
  } else {
    nodes[level].push(traverse);
  }
  root.left && helper(level + 1, nodes, root.left);
  root.right && helper(level + 1, nodes, root.right);
};
