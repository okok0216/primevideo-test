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
    slidesPerView: 1.8,
    slidesPerGroup: 1.8,
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
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
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
    slidesPerView: 1.8,
    slidesPerGroup: 1.8,
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
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
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
    slidesPerView: 1.8,
    slidesPerGroup: 1.8,
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
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
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
    slidesPerView: 1.8,
    slidesPerGroup: 1.8,
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
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
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
        nextEl: ".main-slider-wrap .swiper-button-next",
        prevEl: ".main-slider-wrap .swiper-button-prev",
    },
});

//main swiper 자동
const slider = document.querySelector(".main-slider-list");
const slides = document.querySelectorAll(".main-slider-list > li");
const container = document.querySelector(".main-slider-wrap .inner");

const gap = 20;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll(".main-slider-list > li");

let index = 1;

function moveSlide(animate = true) {
    const slideWidth = allSlides[0].offsetWidth;
    const containerWidth = container.offsetWidth;

    const centerOffset = (containerWidth - slideWidth) / 2;
    const moveAmount = (slideWidth + gap) * index;

    if (!animate) {
        slider.style.transition = "none";
    } else {
        slider.style.transition = "transform 0.6s ease";
    }

    slider.style.transform =
        `translateX(${centerOffset - moveAmount}px)`;
}

// 초기 위치
moveSlide(false);

// 자동 슬라이드
let autoSlide = setInterval(() => {
    index++;
    moveSlide(true);
}, 4000);


slider.addEventListener("transitionend", () => {
    if (index === allSlides.length - 1) {
        index = 1;
        moveSlide(false);
    }

    if (index === 0) {
        index = allSlides.length - 2;
        moveSlide(false);
    }
});


window.addEventListener("resize", () => moveSlide(false));

// ================검색창================
let searchBtn = document.querySelector(".search-btn");
let searchTab = document.querySelector(".search-wrap");
let searchCloseBtn = searchTab.querySelector(".close-btn");
searchBtn.addEventListener("click", e => {
    console.log("isclicked", e);
    searchTab.style.display = "block";
    // searchTab.style.top = "50%";
})
searchCloseBtn.addEventListener("click", e => {
    searchTab.style.display = "none";
})

//검색창 커서
let searchInput = document.querySelector(".searchInput");
searchInput.addEventListener("focus", function () {
    this.type = "text";
    this.classList.add("active");
    this.previousElementSibling.style.display = "none";
})
searchInput.addEventListener("blur", function () {
    this.classList.remove("active");
    this.previousElementSibling.style.display = "block";
    this.type = "reset";
    this.value = "";
})



