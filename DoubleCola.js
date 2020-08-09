// https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function foo(names, r) {
  if (r <= names.length) return names[r - 1];
  let boundary = names.length;
  let eachElNum = 2;
  let lastBoundary = boundary;
  let lastEachElNum = eachElNum;
  while (boundary <= r) {
    lastBoundary = boundary;
    lastEachElNum = eachElNum;
    boundary = boundary + names.length * eachElNum;
    eachElNum = eachElNum * 2;
  }
  const diff = r - lastBoundary;
  const num = diff < lastEachElNum ? 0 : Math.ceil(diff / lastEachElNum);
  return names[num === 0 ? 0 : num - 1];
}

console.log(
  //   foo(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon",
  //   foo(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52),
  //   foo(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230703952)
  //   foo(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) ==
  //     "Leonard",
  //   foo(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 63) === "Rajesh"
  foo(
    [
      "Azuma",
      "Saito",
      "Rajesh",
      "Batou",
      "Motoko Kusanagi",
      "Togusa",
      "Sheldon",
      "Daisuke Aramaki",
    ],
    25
  )
);
