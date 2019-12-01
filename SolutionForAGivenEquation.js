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
        for(numLeft; numLeft <= z; numLeft++){
            for(let i = 1; i <= z; i++){
                if(numLeft * i === z){
                    let arr = []
                    arr.push(numLeft)
                    arr.push(i)
                    answerArr.push(arr)
                }
            }
            
        }
        return answerArr
    }
};

console.log(findSolution(2, 6))