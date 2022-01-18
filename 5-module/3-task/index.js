function initCarousel() {
  //var offsetWidth
  var t_slide = document.getElementsByClassName("carousel__slide")[0].offsetWidth
  var t = t_slide

  var arrBTN = document.getElementsByClassName("carousel__arrow");
  document.getElementsByClassName("carousel__arrow_left")[0].style.display='none';
  for (var i = 0; i < arrBTN.length; i++) {
    

    arrBTN[i].addEventListener('click', function (){
      
      var elem =  document.getElementsByClassName("carousel__inner");
      console.log(elem)
      if (this.classList[1] == 'carousel__arrow_right'){
        document.getElementsByClassName("carousel__arrow_left")[0].style.display='';
        console.log(t)
        elem[0].style.transform = 'translateX(-'+t+'px)'
        t = t+t_slide;
        if (t > t_slide*3){
          this.style.display = 'none';
          t = t_slide*3 - t_slide
        }
      }

      if (this.classList[1] == 'carousel__arrow_left'){
        document.getElementsByClassName("carousel__arrow_right")[0].style.display='';
        console.log(t)
        elem[0].style.transform = 'translateX(-'+t+'px)'
        t = t-t_slide;
        if (t < 0){
          this.style.display = 'none';
          t = t_slide
        }
      }
    }, false);
}
}
