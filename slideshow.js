const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel-item');

let activeIndex = 0;

function showSlide() {
  // Get the currently active item
  const prevItem = items[activeIndex];

  // Update activeIndex for the next slide
  activeIndex = (activeIndex + 1) % items.length;

  // Make the next slide active
  items[activeIndex].classList.add('active');

  // Apply the slideOut animation to the previously active item
  prevItem.style.animation = 'slideOut 1.5s ease-in-out';

  // Wait for the animation to complete before removing the 'active' class
  setTimeout(() => {
    prevItem.classList.remove('active');
    prevItem.style.animation = ''; // Reset animation
  }, 1500); // 1500ms matches the animation duration

  setTimeout(showSlide, 4000); // Change image every 4 seconds
}

showSlide(); // Start the carousel
  

