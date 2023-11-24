const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentItem = 0;

function showItem(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentItem = index;
}

showItem(0);

prevButton.addEventListener('click', () => {
    if (currentItem > 0) {
        showItem(currentItem - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentItem < carouselItems.length - 1) {
        showItem(currentItem + 1);
    }
});
// Add function to automatically rotate featured products
function rotateProducts() {
    if (currentItem < carouselItems.length - 1) {
        showItem(currentItem + 1);
    } else {
        showItem(0);
    }

    setTimeout(rotateProducts, 5000); // Set timeout for 5 seconds
}

rotateProducts();
