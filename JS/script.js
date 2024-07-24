// HAMBURGER :-


const hamburger = document.querySelector('.menu-bar .hamburger');
const menu = document.querySelector('header .nav-links');

// Add an event listener to the hamburger menu button
hamburger.addEventListener('click', () => {
    // Toggle the active class on the hamburger menu button and the full-screen menu
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    // Toggle the FontAwesome icon
    const icon = hamburger.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    if (menu.classList.contains('active')) {
        icon.style.color = '#7b4b36';
        document.body.classList.add('no-scroll');
    } else {
        icon.style.color = '#FFFFFF';
        document.body.classList.remove('no-scroll');
    }
});


// CAROUSEL :-

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let currentIndex = 0;

carouselPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Auto-slide every 3 seconds
setInterval(() => {
    carouselNext.click();
}, 4500);