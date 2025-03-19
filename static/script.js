let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function showCopyright(){
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById("copyright").innerHTML = "Copyright©" + year;
}

function showFooter(){
  document.getElementById("footerInfo").innerHTML = "";
}
showFooter();