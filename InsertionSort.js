function foo (arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        let currentNum = arr[i];

        while(arr[j] > currentNum) {
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = currentNum;
    }
    return arr
}

console.log(foo([3,1,5,4,2]));