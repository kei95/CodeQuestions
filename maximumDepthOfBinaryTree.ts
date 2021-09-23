// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions

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

interface DepthObj {
  depth: number;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let depthObj: DepthObj = {
    depth: 0,
  };
  let currentDepth: number = 0;

  helper(root, depthObj, currentDepth);

  return depthObj.depth;
}

function helper(
  node: TreeNode,
  depthObj: DepthObj,
  currentDepth: number
): void {
  if (!node) {
    return;
  }
  currentDepth++;
  if (currentDepth > depthObj.depth) {
    depthObj.depth = currentDepth;
  }
  helper(node.left, depthObj, currentDepth);
  helper(node.right, depthObj, currentDepth);
}

// time: O(n)
// space: O(n)
