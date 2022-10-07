function filterRange(arr, a, b) {
  let newArr = []
  arr.map(e => e >= a && e <= b ? newArr.push(e) : null)
  return newArr
}
