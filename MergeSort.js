function MergeSort(arr) {

    if(arr.length <= 1 ){
        return arr
    }
    
    return divider(arr);
}

function divider(arr) {
    let mid = Math.floor(arr.length / 2);
    let lhs = arr.slice(0, mid);
    let rhs = arr.slice(mid, arr.length);

    if(arr.length <= 1 ){
        return arr
    } else {
        return merger(divider(lhs), divider(rhs))
    }
}

function merger(lhs, rhs) {
    let mergedArr = [];
    let currentRhIndex = 0;

    for(let i = 0; i < lhs.length; i++){

        for(let j = currentRhIndex; j < rhs.length; j++){
            if(lhs[i] > rhs[j]){
                currentRhIndex++;
                mergedArr.push(rhs[j]);
            }
        }
        mergedArr.push(lhs[i]);
    }

    for(let i = currentRhIndex; i < rhs.length; i++){
        mergedArr.push(rhs[i]);
    }

    return mergedArr
}

console.log(MergeSort([6, 11, 26, 84, 24, 35, 66, 9, 111, 1]));