var repeatedNTimes = function(A) {
    let answerArr = [];

    for(let i = 0; i < A.length; i++) {
        if(!answerArr.includes(A[i])){
            answerArr.push(A[i])
        } else {
            return A[i]
        }
    }

    return -1;
};

console.log(repeatedNTimes([2,6,2,1]));