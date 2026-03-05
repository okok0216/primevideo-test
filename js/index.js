// 랭킹 swiper
let rankingSwiper = new Swiper(".ranking-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 2,
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
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    },
});

// 최근 추가된 콘텐츠 swiper
let newcontentSwiper = new Swiper(".new-contents-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: {
        el: ".new-contents-pagination",
    },
    navigation: {
        nextEl: ".new-contents-button-next",
        prevEl: ".new-contents-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1300: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
    },
});

// 계속 시청하기 swiper
let playingSwiper = new Swiper(".playing-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: {
        el: ".playing-pagination",
    },
    navigation: {
        nextEl: ".playing-button-next",
        prevEl: ".playing-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1300: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
    },
});

// 추천영화 swiper
let recmovieSwiper = new Swiper(".rec-movie-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: {
        el: ".rec-movie-pagination",
    },
    navigation: {
        nextEl: ".rec-movie-button-next",
        prevEl: ".rec-movie-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1300: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
    },
});

// 추천TV프로그램 swiper
let rectvSwiper = new Swiper(".rec-tv-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: {
        el: ".rec-tv-pagination",
    },
    navigation: {
        nextEl: ".rec-tv-button-next",
        prevEl: ".rec-tv-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1300: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
    },
});

let mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 1.06,
    centeredSlides: true,
    spaceBetween: 20,
// 오리지널 swiper
let originalSwiper = new Swiper(".original-wrap .original-list-wrap", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 8,
    pagination: {
        el: ".original-pagination",
    },
    navigation: {
        nextEl: ".original-button-next",
        prevEl: ".original-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        980: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1280: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
        1300: {
            slidesPerView: 7,
            slidesPerGroup: 7,
        },
    },
});

// 회원추천 swiper
let reviewSwiper = new Swiper(".review-wrap .review-list-wrap", {
    slidesPerView: 1.5,
    slidesPerGroup: 1.5,
    spaceBetween: 15,
    pagination: {
        el: ".review-pagination",
    },
    navigation: {
        nextEl: ".review-button-next",
        prevEl: ".review-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            slidesPerGroup: 1.5,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        980: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1300: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    },
});


const mainSwiper = new Swiper(".main-slider-wrap .swiper", {
    slidesPerView: 1,
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

let slides = document.querySelectorAll(".main-swiper .swiper-slide");
console.log(slides);

slides.forEach(s => {
    s.addEventListener("mouseenter", () => {
        let video = s.children[0]
        console.log(video)
        video.play();
    })
    s.addEventListener("mouseleave", () => {
        let video = s.children[0];
        video.pause();
        video.currentTime = 0;
    })
})
