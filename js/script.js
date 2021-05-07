new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.6,
  spaceBetween: 0,
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  freeMode: true,
  breakpoints: {
    900: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});
