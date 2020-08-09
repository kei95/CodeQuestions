// https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript

function foo(seconds) {
  if (seconds === 0) return "now";
  let year = 0,
    day = 0,
    hour = 0,
    min = 0;

  while (seconds >= 60) {
    if (seconds >= 3600 * 24 * 365) {
      year = Math.floor(seconds / (3600 * 24 * 365));
      seconds -= year * 3600 * 24 * 365;
    } else if (seconds >= 3600 * 24) {
      day = Math.floor(seconds / (3600 * 24));
      seconds -= day * 3600 * 24;
    } else if (seconds >= 3600) {
      hour = Math.floor(seconds / 3600);
      seconds -= hour * 3600;
    } else if (seconds >= 60) {
      min = Math.floor(seconds / 60);
      seconds -= min * 60;
    }
  }
  const returnStr = () => {
    const returnArr = [];

    year > 0 && returnArr.push(year > 1 ? `${year} years` : `${year} year`);
    day > 0 && returnArr.push(day > 1 ? `${day} days` : `${day} day`);
    hour > 0 && returnArr.push(hour > 1 ? `${hour} hours` : `${hour} hour`);
    min > 0 && returnArr.push(min > 1 ? `${min} minutes` : `${min} minute`);
    seconds > 0 &&
      returnArr.push(seconds > 1 ? `${seconds} seconds` : `${seconds} second`);

    return returnArr
      .filter((item) => !!item)
      .map((item, index, arr) =>
        index + 1 === arr.length - 1
          ? `${item} and `
          : index === arr.length - 1
          ? `${item}`
          : `${item}, `
      )
      .join("");
  };
  return returnStr();
}

console.log(foo(3600));
