var sortArrayByParity = function(A) {
    let answerArr = [];

    for(i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            answerArr.splice(0,0, A[i]);
        } else {
            answerArr.push(A[i])
        }
    }

    return answerArr
};

console.log(sortArrayByParity([3,1,2,4]));
