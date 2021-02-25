const arr = [
  ["Jan", "A", "1"],
  ["Jan", "B", "2"],
  ["Feb", "A", "5"],
];

// expected shape
const test = [
  { Jan: { A: { link: ["1"] }, B: { link: ["2"] } } },
  { Feb: { A: { link: ["1"] }, B: { link: ["2"] } } },
];

function foo(arr) {
  let res = [];

  arr.map((value) => {
    const day = value[0];
    const group = value[1];
    const link = value[2];

    // filter out the object
    let filteredObj = res.filter((v) => day in v);

    // object already exists
    if (filteredObj.length === 0) {
      filteredObj = { [day]: { [group]: { link: [link] } } };
      res.push(filteredObj);
    } else {
      const filteredObjIndex = res.indexOf(filteredObj);
      filteredObj = filteredObj[0];

      // add or update the group with link
      group in filteredObj
        ? {
            ...filteredObj,
            [group]: { link: [...filteredObj[day][group].link, link] },
          }
        : { ...filteredObj, [group]: { link: [link] } };

      // replace the object
      res.splice(filteredObjIndex, 1, filteredObj);
      console.log(res);
    }
  });
  return res;
}

console.log(foo(arr));
