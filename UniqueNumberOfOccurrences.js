var uniqueOccurrences = function(arr) {
    let occurrences = {};
    let nums = [];

    if(arr.length === 0) return false
    for(let i = 0; i < arr.length; i++){
        occurrences[arr[i]] = occurrences[arr[i]] ? occurrences[arr[i]] + 1 : 1
    }
    nums = Object.values(occurrences);
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+ 1; j < nums.length; j++){
            if(nums[j] === nums[i]) return false
        }
    }
    return true
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))