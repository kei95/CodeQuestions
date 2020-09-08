// https://paiza.jp/career/challenges/77

function foo(lines) {
  const words = lines.slice(1, lines.length);
  words.forEach((word) => {
    wordParser(word);
  });
}

/**
 * Show console log beased on the word passed as an argument
 * @param {string} word - string to parse
 **/
function wordParser(word) {
  if (
    word.endsWith("s") ||
    word.endsWith("sh") ||
    word.endsWith("ch") ||
    word.endsWith("o") ||
    word.endsWith("x")
  ) {
    console.log(`${word}es`);
  } else if (word.endsWith("f")) {
    const resultWithF = word.slice(0, word.length - 1);
    console.log(`${resultWithF}ves`);
  } else if (word.endsWith("fe")) {
    const resultWithFe = word.slice(0, word.length - 2);
    console.log(`${resultWithFe}ves`);
  } else if (
    !word.endsWith("ay") &&
    !word.endsWith("ey") &&
    !word.endsWith("iy") &&
    !word.endsWith("oy") &&
    !word.endsWith("uy") &&
    word.endsWith("y")
  ) {
    const resultWithYs = word.slice(0, word.length - 1);
    console.log(`${resultWithYs}ies`);
  } else {
    console.log(`${word}s`);
  }
}
