// https://paiza.jp/career/challenges/359/page/result

function foo() {
  if (!lines) return null;
  const costs = lines.slice(1, lines.length);
  let leftAmount = parseInt(lines[0].split(" ")[0], 0);
  let points = 0;
  costs.forEach((cost) => {
    if (points >= cost) {
      points = points - cost;
      console.log(`${leftAmount} ${points}`);
    } else {
      leftAmount = leftAmount - cost;
      points = points + cost / 10;
      console.log(`${leftAmount} ${points}`);
    }
  });
}
