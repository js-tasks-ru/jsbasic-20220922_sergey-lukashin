function camelize(str) {
  if (!str) return str
  let newStr = str.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
  if (str[0] === '-') {
    return newStr
  }
  return newStr[0].toLowerCase() + newStr.slice(1)
}
