window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.main-banner-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
