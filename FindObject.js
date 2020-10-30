// https://paiza.jp/challenges/137/show

function foo(lines) {
  const firstLine = lines.slice(0, 1);
  const cameraAmount = parseInt(firstLine[0].split(" ")[2]);
  const cameras = lines.slice(1, cameraAmount + 1);
  const objects = lines.slice(cameraAmount + 1, lines.length);
  objects.forEach((obj) => {
    const splittedObjStr = obj.split(" ");
    const positionX = splittedObjStr[0];
    const positionY = splittedObjStr[1];
    for (let i = 0; i < cameras.length; i++) {
      const cmConfig = cameras[i].split(" ");
      if (
        findObject(
          cmConfig[0],
          cmConfig[1],
          cmConfig[2],
          cmConfig[3],
          cmConfig[4],
          positionX,
          positionY
        )
      ) {
        console.log("yes");
        break;
      }
      if (i === cameras.length - 1) console.log("no");
    }
  });
}

function findObject(cx, cy, e, f, d, px, py) {
  const position = Math.sqrt(Math.pow(cx - px, 2) + Math.pow(cy - py, 2));
  if (position > d) return false;
  let target = Math.atan2(py - cy, px - cx) * (180 / Math.PI);
  // if (target < 0) target += 360;
  const maxAngle = parseInt(e, 10) + f / 2;
  const minAngle = parseInt(e, 10) - f / 2;
  console.log("max", maxAngle, "min", minAngle, "target", target);
  if (target > maxAngle || target < minAngle) return false;
  // if (px < cx && py < cy) return false;
  return true;
}

foo(["30 10 1 4", "12 12 45 22.5 15", "12 7"]);

// foo([
//   "30 10 3 4",
//   "0 0 30 30 15",
//   "15 5 210 30 15",
//   "30 10 270 45 5",
//   "7 2",
//   "7 8",
//   "30 9",
//   "30 0",
// ]);
