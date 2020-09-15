// https://paiza.jp/challenges/202/show

// function foo(lines) {
//   const weeks = lines[0] / 7;
//   const days = lines[1].split(" ");
//   const timesOfWeeks = weeks.toString().split("")[0];
//   const beginningOfTheDay = lines[0] - timesOfWeeks * 7;
//   const coreWeek = days.slice(beginningOfTheDay, beginningOfTheDay + 7);
//   let result = 0;
//   days.forEach((day, idx) => {
//     let timesMoved = 0;
//     let dayOffs = 0;

//     if (idx < beginningOfTheDay || beginningOfTheDay === 0) {
//       for (let i = idx; timesMoved !== 7; i++) {
//         if (days[i] === "0") dayOffs = dayOffs + 1;
//         if (dayOffs === 2) {
//           result = result + 1;
//           timesMoved = 7;
//           break;
//         }
//         if (i === days.length - 1) i = beginningOfTheDay;
//         timesMoved++;
//       }
//     } else {
//       for (let i = idx; timesMoved !== 7; i++) {
//         if (coreWeek[i - beginningOfTheDay] === "0") dayOffs = dayOffs + 1;
//         if (dayOffs === 2) {
//           result = result + 1;
//           timesMoved = 7;
//           break;
//         }
//         if (i - beginningOfTheDay === coreWeek.length) i = beginningOfTheDay;
//         timesMoved++;
//       }
//     }
//   });
//   console.log(result);
// }

function foo(lines) {
  const daysLength = lines[0];
  const daysDetails = lines[1].split(" ");
  let maxLengthDayOffs = 0;
  let currentLength = 0;

  for (let idx = 0; idx < daysLength - 6; idx++) {
    let dayOffs = 0;
    let daysFromStart = 0;
    let beginningDay = idx;
    while (beginningDay < daysLength - 6) {
      if (daysFromStart === 7) {
        currentLength = 0;
        break;
      }
      if (daysDetails[beginningDay + daysFromStart] === "0") dayOffs++;
      if (dayOffs === 2) {
        currentLength === 0 ? (currentLength = 7) : currentLength++;
        if (currentLength > maxLengthDayOffs) maxLengthDayOffs = currentLength;
        break;
      }
      daysFromStart++;
    }
  }
  console.log(maxLengthDayOffs);
}

foo(["9", "1 0 1 1 1 1 1 1 0"]);
