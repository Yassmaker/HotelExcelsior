const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function updateCarousel() {
const slideWidth = slides[0].clientWidth;
carouselContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function nextSlide() {
if (currentIndex < slides.length - 1) {
    currentIndex++;
} else {
    currentIndex = 0;
}
updateCarousel();
}

function prevSlide() {
if (currentIndex > 0) {
    currentIndex--;
} else {
    currentIndex = slides.length - 1;
}
updateCarousel();
}

setInterval(nextSlide, 3000); 
