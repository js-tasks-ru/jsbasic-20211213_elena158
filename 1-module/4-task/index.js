function checkSpam(str) {
  let result = false;
  if (str.toUpperCase().indexOf('1xBet'.toUpperCase()) !=-1|| str.toUpperCase().indexOf('XXX'.toUpperCase())!=-1) {
    result = true; 
  }
 
  return result
}
