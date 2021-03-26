function longestPalindrome(s: string): string {
  if (!s) return "";
  let res: string = s[0];

  for (let i: number = 0; i < s.length; i++) {
    for (let j: number = s.length - 1; i < j; j--) {
      // is palindrome starts
      if (s[i] === s[j]) {
        let beginning: number = i;
        let end: number = j;
        // loop through palindrome
        while (beginning < end) {
          if (s[beginning] !== s[end]) {
            break;
          }
          beginning++;
          end--;
        }
        if (beginning >= end) {
          const subStr: string = s.substring(i, j + 1);
          res = res.length > subStr.length ? res : subStr;
          if (res.length > s.length / 2) return res;
        }
      }
    }
  }

  return res;
}

console.log(longestPalindrome("cbbd"));

// time O(n2)
// space O(n)
