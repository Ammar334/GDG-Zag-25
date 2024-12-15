let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Ensure the index is within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Move the slider
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-transition every 3 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}
  
// Pause auto-transition on hover
function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}
  
// Event listeners for hover effect
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', pauseAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);
  
// Initialize the first slide and auto-slide
showSlide(0);
startAutoSlide();
