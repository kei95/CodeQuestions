function foo(lhs, rhs) {
    let mergedArr = [];
    let rhsIndex = 0;

    for(let i = 0; i < lhs.length; i++) {
        for(let j = rhsIndex; j < rhs.length; j++){
            if(lhs[i] > rhs[j]){
                mergedArr.push(rhs[rhsIndex]);
                rhsIndex++;
            }
        }
        mergedArr.push(lhs[i]);
    }

    for(let i = rhsIndex; i < rhs.length; i++){
        mergedArr.push(rhs[i]);
    }

    return mergedArr
}

console.log(foo([1,3,5,7,10], [2,4,6,8,9]))