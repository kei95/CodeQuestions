// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  if (!s || s.length === 0) return 0;
  const chars: string[] = [...s]; // pase the str
  let currentStr: string = ""; // current subString
  let maxNum: number = 1; // max number

  for (let i = 0; i < chars.length; i++) {
    for (let j = i; j < chars.length; j++) {
      if (currentStr.includes(chars[j])) {
        currentStr = "";
        break;
      }
      currentStr = currentStr.length === 0 ? chars[j] : currentStr + chars[j];
      if (currentStr.length > maxNum) maxNum = currentStr.length;
      if (j === chars.length - 1) return maxNum;
    }
  }
  return maxNum;
}

console.log(lengthOfLongestSubstring("pwwkew")); // dydte

// time complexity O(n2)
// Space complexity O(n)
