var foo = function(nums) {
    let answer = 0;
    let maxIndex = 0;

    if (nums.length == 0) return 0; 
    if (nums.length < 3) return Math.max(...nums);
    if (nums.length == 3) {
        if(nums[0] + nums[2] > Math.max(...nums)){
            return nums[0] + nums[2]
        } else {
            return Math.max(...nums);
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(i == 0 && nums[i] + nums[i + 2] < nums[i + 1]){
            i++;
            answer+= nums[i];
            i++;
        } else {
            if(i+2 < nums.length){
            for(let j = i + 2; j < nums.length; j++){
                if(nums[j] > nums[i]){
                    maxIndex = j;
                }
            }
            answer += nums[maxIndex];
            i = maxIndex;
        }
        }
    } 

    return answer
};

var rob = function(nums) {

	let solution = [];

	solution[nums.length] = 0;
	solution[nums.length-1] = nums[nums.length-1];

	for (let i=nums.length-2; i>=0; i--) {
		solution[i] = Math.max(nums[i] + solution[i + 2], solution[i+1]);
	}

	return solution[0];
};

console.log(rob([1,2,3,1]));