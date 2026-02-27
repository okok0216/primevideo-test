// 랭킹 swiper
let rankingSwiper = new Swiper(".ranking-list-wrap", {
    slidesPerView: 2,
    slidesPerGroupSkip: 1,
    // spaceBetween: 80,
    pagination: {
        el: ".ranking-pagination",
    },
    navigation: {
        nextEl: ".ranking-button-next",
        prevEl: ".ranking-button-prev",
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

// 최근 추가된 콘텐츠, 계속 시청하기, 추천 영화, 추천 TV프로그램 swiper
let movieSwiper = new Swiper(".new-contents-list-wrap", {
    slidesPerView: 1.8,
    slidesPerGroupSkip: 6,
    pagination: {
        el: ".new-contents-pagination",
    },
    navigation: {
        nextEl: ".new-contents-button-next",
        prevEl: ".new-contents-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.8
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 6
        },
    },
});