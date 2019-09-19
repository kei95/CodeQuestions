var selfDividingNumbers = function(left, right) {
    var answerArr = [];

    for(i = left; i <= right; i++) {
        if(i < 10) {
            answerArr.push(i)
        } else {
            if(selfDivider(i)){
                answerArr.push(i);
            }
        }

    }
    return answerArr;
};

// returns boolean
function selfDivider(num) {
    var originalNum = num
    while (num > 0) {
        var digit = num % 10;
        num = Math.floor(num / 10)
        if (originalNum % digit !== 0) {
            return false
        }
    }
    return true
}


console.log(selfDividingNumbers(1, 22));