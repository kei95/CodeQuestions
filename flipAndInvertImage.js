/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // reverse an array
    for(let i = 0; i < A.length; i++){
        let block = A[i]
        block.reverse();
        for(let j = 0; j < block.length; j++){
            // flip an array
            if(block[j] == 0){
                block[j] = 1
            } else if(block[j] == 1) {
                block[j] = 0
            }
        }
    }
    return A
};