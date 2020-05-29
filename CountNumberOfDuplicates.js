// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function foo(text) {
  const parsedChars = text.toLowerCase().split("");
  let charsObj = {};
  parsedChars.forEach((char) => {
    if (!(char in charsObj)) {
      charsObj[`${char}`] = charsObj[`${char}`] ? charsObj[`${char}`] + 1 : 1;
    } else {
      charsObj[`${char}`] = charsObj[`${char}`] + 1;
    }
  });
  const numbers = Object.values(charsObj);
  return numbers.filter((num) => num > 1).length;
}

console.log(foo("Indivisibilities"));
console.log(foo("aA11"));
