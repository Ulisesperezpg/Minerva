document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let index = 0;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * carousel.children[0].clientWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});
