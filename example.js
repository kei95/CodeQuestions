// Swapping variables
let a = "this was a";
let b = "this was b";
[a, b] = [b, a];
console.log(a); // "this was b"
console.log(b); // "this was a"

// separate first element from the array and create an array of the rest of them
const str = "firstString we are the rest";
const [firstStr, ...restStr] = str.split(" ");

console.log(firstStr); // "firstString"
console.log(restStr); // [ 'we', 'are', 'the', 'rest' ]
