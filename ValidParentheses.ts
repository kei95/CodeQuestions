// https://leetcode.com/problems/valid-parentheses/submissions/

interface IDIC {
  ")": string;
  "]": string;
  "}": string;
}

const DIC: IDIC = {
  ")": "(",
  "]": "[",
  "}": "{",
};

function isValid(s: string): boolean {
  if (!s) return false;
  const chars: string[] = s.split("");
  const stack: string[] = [];

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    const currentDicChar = DIC[currentChar];
    if (!currentDicChar) {
      stack.push(chars[i]);
    } else {
      if (stack[stack.length - 1] === currentDicChar) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// time: O(n)
// space: O(n)
