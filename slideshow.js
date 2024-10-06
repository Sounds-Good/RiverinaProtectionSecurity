let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.animation = "none"; // Reset animation
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.animation = "fade 1.5s"; // Apply animation
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
