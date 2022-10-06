function sumSalary(salaries) {
  let sum = 0
  for (let k in salaries) {
    if (Number.isNaN(salaries[k]) || !isFinite(salaries[k])) {
      continue
    }
    if (typeof salaries[k] === 'number') {
      sum += salaries[k]
    }
  }
  return sum
}
