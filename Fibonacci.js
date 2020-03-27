function foo(n){
    if(n < 1){
        return n
    }
    let answer;
    let prevNum = 0
    let currentNum = 1
    for(i = 1; i < n; i++) {
        answer = prevNum + currentNum
        prevNum = currentNum
        currentNum = answer
    }
    return answer
}

console.log(foo(9))