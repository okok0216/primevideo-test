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

let mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 1.06,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".main-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".main-button-next",
        prevEl: ".main-button-prev",
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // }
});

let slides = document.querySelectorAll(".preview-video")
console.log(slides)
slides.forEach(slide => {

    slide.addEventListener("mouseenter", () => {
        slide.play();
    });

});