const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { 
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true, 
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true, 
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true, 
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
