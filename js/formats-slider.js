const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.slider-button.next',
    prevEl: '.slider-button.prev',
  },
  scrollbar: {
    el: 'swiper-scrollbar',
  },
});
