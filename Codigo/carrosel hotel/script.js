const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    showImage(index);
});

nextButton.addEventListener('click', () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    showImage(index);
});
