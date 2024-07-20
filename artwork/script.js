// Optional JavaScript for handling button click events
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageAlt = this.parentElement.querySelector('img').alt;
            alert(`You have purchased ${imageAlt}`);
            // Implement further functionality as needed, e.g., redirect to a purchase page
            // window.location.href = 'purchase_page.html';
        });
    });
});

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;

function slideNext() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    const offset = -currentIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${offset}px)`;
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);
