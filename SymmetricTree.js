// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root || !root.right && !root.left) return true
    let leftArr = []
    let rightArr = []
    helper(root.left,leftArr, true)
    helper(root.right,rightArr, false)
    console.log(leftArr, rightArr)
    if(leftArr.toString() === rightArr.toString()){
        return true
    }
    return false
};

function helper(node, arr, isLeft) {
    if(!node) return
    if (!node.left && !node.right){
        arr.push(node.val)
        return
    }
    arr.push(node.val)
    if(isLeft){
        node.left ? helper(node.left, arr, true) : arr.push(null)
        node.right ? helper(node.right, arr, true) : arr.push(null)
    } else { 
        node.right ? helper(node.right, arr, false) : arr.push(null)
        node.left ? helper(node.left, arr, false) : arr.push(null)
    }
}