function makeFriendsList(friends) {
  let result = document.createElement('ul')
  let HTMLtext = ''
  for (let i=0;i< friends.length;i++){
    HTMLtext = HTMLtext + '<li>'+friends[i].firstName+' '+friends[i].lastName+'</li>'
  }
  result.innerHTML = HTMLtext;
  
  console.log(result)
  return result;
}