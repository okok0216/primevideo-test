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