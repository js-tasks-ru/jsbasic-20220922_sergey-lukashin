function getMinMax(str) {
  let resObj = {
    min: null,
    max: null
  };
  let numArr = str.split(' ').filter(item => (!Number.isNaN(parseFloat(item)))).map(number => parseFloat(number));
  let minValue = numArr[0];
  let maxValue = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (minValue > numArr[i]) {
      minValue = numArr[i];
    }
    if (maxValue < numArr[i]) {
      maxValue = numArr[i];
    }
  }
  resObj.min = minValue;
  resObj.max = maxValue;
  return resObj;
}
