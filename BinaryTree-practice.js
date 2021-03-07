/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  const maxDepth = helper(root, depth);
  return maxDepth;
};

function helper(node, depth) {
  if (!node) return depth;
  depth += 1;
  const leftDepth = helper(node.left, depth);
  const rightDepth = helper(node.right, depth);
  return leftDepth > rightDepth ? leftDepth : rightDepth;
}

// time O(n)
// space O(1)
