function camelize(str) {
  let result = ""
  let stringArr = []

  stringArr = str.split("-")
  console.log(stringArr)
  for (let i = 1; i < stringArr.length; i++) {

    const name = stringArr[i]
    const splitted = name.split("")
    const first = splitted[0].toUpperCase()

    const rest = [...splitted]

    rest.splice(0, 1)

    const strNew = [first, ...rest].join("")

    stringArr[i] = strNew
  }
  result = stringArr.join('')
  return result
}