var checkPerfectNumber = function(num) {
    if(num === 0) {
        return false
    }
    let DivArr = devider(num);
    var answer = 0;
    DivArr.forEach((div) => {
        answer = answer + div
        console.log(answer)
    });
    if(answer === num){
        return true
    }
    return false;
};

function devider(num) {
    var divs = [];
    if(num > 1){
        for(i = 0; i <= num/2; i++) {
            if(num % i === 0 ){
                divs.push(i);
            }
        }
    }
    return divs
}

console.log(checkPerfectNumber(28));