/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    if(customfunction === 1){
        let answerArr = [];
        let numLeft = 1;
        let numRight = z - 1;
        for(numRight; numRight > 0; numRight-- && numLeft++){
            let arr = []
            arr.push(numLeft)
            arr.push(numRight)
            answerArr.push(arr)
        }
        return answerArr
    }

    if(customfunction === 2){
        let answerArr = [];
        let numLeft = 1;
        let numRight = z;
        for(numLeft; numLeft <= z; numLeft++ && numRight--){
            if(numLeft * numRight === z){
                let arr = []
                arr.push(numLeft)
                arr.push(numRight)
                answerArr.push(arr)
            }
        }
        return answerArr
    }
};

console.log(findSolution(2, 5))