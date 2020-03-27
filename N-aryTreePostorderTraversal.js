/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root){
        return []
    }
    let res = []
    const helper = (root) => {
        root.children.forEach( e => {
            helper(e)
        });
        res.push(root.val)

    }
    
    helper(root)
    return res
};

console.log(postorder([1,null,3,2,4,null,5,6]))