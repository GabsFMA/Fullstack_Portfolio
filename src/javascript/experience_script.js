const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        868: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
    
  });