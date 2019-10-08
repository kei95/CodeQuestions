var repeatedNTimes = function(A) {
    let answerArr = Array.from(Array(A.length), () => 0);

    for(let i = 0; i < A.length; i++) {
        answerArr[A[i]] = answerArr[A[i]] + 1;
    }
    return answerArr.indexOf(Math.max(...answerArr));
};

console.log(repeatedNTimes([1,2,3,3]));




































// const templeteArr = [];

// for(let i = 0; i < A.length; i++) {
//     if(!templeteArr.includes(A[i])){
//         templeteArr.push(A[i])
//     } else {
//         return A[i];
//     }
// }
// return -1