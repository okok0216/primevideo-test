// 랭킹 swiper
let swiper = new Swiper(".ranking-list-wrap", {
    slidesPerView: 2,
    slidesPerGroupSkip: 1,
    // spaceBetween: 80,
    pagination: {
        el: ".movie-pagination",
    },
    navigation: {
        nextEl: ".movie-button-next",
        prevEl: ".movie-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 5
        },
    },
});