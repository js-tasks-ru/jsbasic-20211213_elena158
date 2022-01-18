function toggleText() {
  var arrBTN = document.getElementsByClassName("toggle-text-button");
  for (var i = 0; i < arrBTN.length; i++) {
    arrBTN[i].addEventListener('click', function (){
      if (text.hidden) {
        text.hidden = false;
      } else 
       {text.hidden = true}

    }, false);
}
}

