function getMinMax(str) {
  let arr = str.split(" ").filter((item) => +item);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let resObj = {
    max, min
  };
  return resObj;
}
