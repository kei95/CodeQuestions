function bubbleSort(arr) {
    let isSwapped = false;

    for(let i = 0; i <= arr.length - 2; i++){
        isSwapped = false
        for(let j = i + 1; j <= arr.length - 2; j ++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true
            }
        }
        if(isSwapped == false) {
            return arr
        }
        console.log(arr)
    }
    return arr
}

bubbleSort([1, 5, 2, 4, 3, 8, 10, 9, 7, 6]);