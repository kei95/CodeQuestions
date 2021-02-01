// https://paiza.jp/challenges/403/show
function foo() {
  const passedStr = lines[0]
  const rowLength = lines[0].length + 2
  const otherLinesStr = new Array(rowLength + 1).join('+');
  const passedStrWithChar = `+${passedStr}+`
  console.log(otherLinesStr + '\n' + passedStrWithChar + '\n' + otherLinesStr)
}