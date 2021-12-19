function ucFirst(str) {
  let result = str
  if (result !== ""){
    result=result[0].toUpperCase()+result.slice (1)
  }
  
  return result
}
