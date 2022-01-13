function getMinMax(str) {
  let result = {}
  let arrStr = []
  arrStr = str.split(' ')
  console.log(arrStr)
  let newArr = []
  for (let i = 0; i < arrStr.length; i++) {
    if (String(parseFloat(arrStr[i])) === String(arrStr[i])) {
      console.log(i)
      newArr.push(parseFloat(arrStr[i]))
    };
  }
  console.log(newArr)

  newArr.sort(function (a, b) {
    return a - b;
  })
  result.min = newArr[0]
  result.max = newArr[newArr.length - 1]
  console.log(newArr)
  return result
}