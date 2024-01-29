let currentIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');

function showSlide(index) {
    const offset = -index * 100 + '%';
    document.querySelector('.gallery-wrapper').style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}