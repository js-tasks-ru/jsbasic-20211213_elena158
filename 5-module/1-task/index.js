
function hideSelf() {
  var arrBTN = document.getElementsByClassName("hide-self-button");
  console.log(arrBTN)
  for (var i = 0; i < arrBTN.length; i++) {
    arrBTN[i].addEventListener('click', function (){
      this.hidden = true
    }, false);
}
}

