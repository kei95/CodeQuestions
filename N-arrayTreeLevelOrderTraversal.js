// Question: https://leetcode.com/problems/n-ary-tree-level-order-traversal/submissions/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if(!root){return []}
    let depth = 0
    let answerArr = []
    helper(root, depth, answerArr)
    return answerArr
};

var helper = (node, depth, arr) => {
    if(node.children.length === 0) {
        if(!arr[depth]){
            for(i=arr.length; i <= depth; i++){
                arr.push([])
            }
        }

        return arr[depth].push(node.val)
    }

    node.children.map(item => {
        helper(item, depth + 1, arr)
    })
    arr[depth].push(node.val)
}