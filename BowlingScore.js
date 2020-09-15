// https://paiza.jp/challenges/24/show

function foo(lines) {
  const splittedFirstLine = lines[0].split(" ");
  let pins = splittedFirstLine[1];
  const scores = lines[1].split(" ");
  const framesArr = createFrames(scores, pins);
  let totalScore = 0;
  let strikeScore = 0;
  let spareScore = 0;
  let wasStrike = false;
  let wasSpare = false;

  framesArr.forEach((frame, idx) => {
    let currentFrameScore = 0;
    pins = parseInt(pins, 0);
    for (let i = 0; i < frame.length; i++) {
      if (frame.length === 1) {
        if (wasSpare) {
          spareScore += pins;
        }
        strikeScore += pins;
        wasStrike = true;
        break;
      }
      if (frame[i] === "G") {
        currentFrameScore = currentFrameScore + 0;
        // Spare
        if (wasSpare && i === 0) {
          spareScore = parseInt(pins, 0);
          totalScore += totalScore + spareScore;
          spareScore = 0;
          wasSpare = false;
        }
      } else {
        const score = parseInt(frame[i], 0);
        currentFrameScore += score;
        // Strike
        if (wasSpare && i === frame.length - 1) {
          if (wasSpare) {
            totalScore =
              totalScore + strikeScore + spareScore + currentFrameScore + score;
            wasSpare = false;
          }
          if (wasStrike) {
            strikeScore += pins;
            break;
          }
          totalScore = totalScore + strikeScore + currentFrameScore + score;
          wasStrike = false;
          break;
        }
        // Spare
        if (wasSpare && i === 0) {
          totalScore += totalScore + spareScore + score;
          spareScore = 0;
          wasSpare = false;
        }
        if (currentFrameScore === pins && i > 0) {
          spareScore = pins;
          wasSpare = true;
          break;
        }
        totalScore += currentFrameScore;
      }
    }
  });
  console.log(totalScore);
}

function createFrames(scores, pins) {
  const totalFrames = [];
  for (let i = 0; i < scores.length; i++) {
    if (i === scores.length - 1) {
      totalFrames[totalFrames.length - 1].push(scores[i]);
      break;
    }
    if (scores[i] === pins) {
      const newFrame = [scores[i]];
      totalFrames.push(newFrame);
    } else {
      const newFrame = [scores[i], scores[i + 1]];
      totalFrames.push(newFrame);
      i++;
    }
  }
  return totalFrames;
}

foo(["10 10 18", "3 4 G 1 8 2 6 2 10 2 7 G 10 10 10 9 1 3"]);
