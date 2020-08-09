// https://paiza.jp/career/challenges/266/page/result

function foo(line) {
  if (line.length === 0 || !line) return;
  const requiredScore = parseInt(line[0].split(" ")[1], 10);
  const passedStudentNums = [];
  line.map((student, index) => {
    if (index === 0) return;
    const splittedStr = student.split(" ");
    const score = splittedStr[0];
    const absent = splittedStr[1];
    const totalScore =
      parseInt(score, 10) - parseInt(absent, 10) * 5 > 0
        ? parseInt(score, 10) - parseInt(absent, 10) * 5
        : 0;
    totalScore >= requiredScore && passedStudentNums.push(index);
  });
  return passedStudentNums;
}

console.log(foo(["5 0", "80 3", "70 4", "30 7", "60 1", "15 7"]));
// Expected: ['1', '2', '3', '4', '5']
