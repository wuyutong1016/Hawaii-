// This file contains JavaScript code for interactive features of the hotel reservation website.

document.addEventListener('DOMContentLoaded', function() {
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide-track img');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        slideTrack.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Automatic slide show
    setInterval(nextSlide, 3000);

    // Language switcher functionality
    window.switchLanguage = function(lang) {
        const elements = document.querySelectorAll('[data-lang-cn], [data-lang-en]');
        elements.forEach(element => {
            if (lang === 'cn') {
                element.textContent = element.getAttribute('data-lang-cn');
            } else if (lang === 'en') {
                element.textContent = element.getAttribute('data-lang-en');
            }
        });
    };
});