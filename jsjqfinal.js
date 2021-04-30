var slideIndex = 1;
showSlides(slideIndex);

//button control
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//small control
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//slideshow
function showSlides(n) {
 //variables
  var pics = document.getElementsByClassName("pics");
  var small = document.getElementsByClassName("small");
  if (n > pics.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";  
  }

  //small pics
  for (i = 0; i < small.length; i++) {
      small[i].className = small[i].className.replace(" active", "");
  }
  pics[slideIndex-1].style.display = "block";  
  small[slideIndex-1].className += " active";
}



