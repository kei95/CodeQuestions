// https://leetcode.com/problems/valid-parentheses/submissions/

function isValid(s: string): boolean {
  const chars: string[] = s.split("");
  const stack: string[] = [];
  const dic = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in dic) {
      const correspondigChar = dic[chars[i]];
      if (correspondigChar === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(chars[i]);
    }
  }
  return stack.length === 0 ? true : false;
}
