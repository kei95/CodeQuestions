var arrangeCoins = function(n) {
    let round = 0;
    let remainedNum = n;
    if(n == 1){
        return 1
    }
    for(i = 0; i < n; i++){
        var requiredNum = round + 1;
        if(requiredNum <= remainedNum){
            remainedNum -= requiredNum
            round++;
        } else {
            break;
        }
    }
    return round;
};

console.log(arrangeCoins(100));