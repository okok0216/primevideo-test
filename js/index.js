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

// ----footer lang선택----------------------------------------
// .lang-wrap click event 
let langWrap = document.querySelector(".lang-wrap>a");
let lang = document.querySelector(".lang");
let langA = document.querySelectorAll(".lang>li a");
let langWrapA = document.querySelector(".lang-wrap>a span");

function langToggle(){//lang active클래스 붙이는 공통함수
    lang.classList.toggle('active');
    langWrap.classList.toggle('active');
}

// .lang-wrap click event 
langWrap.addEventListener("click", (e)=>{
    e.preventDefault();//a의 기본 이벤트 막기
    langToggle();
});

// .lang click event
langA.forEach((a)=>{
    a.addEventListener("click", (e)=>{
        e.preventDefault();//a의 기본 이벤트 막기
        langWrapA.innerText = a.innerText;
        langToggle();
    });
});

// ----공통함수----------------------------------------
// 윈도우의 너비값 체크할 함수
let wWidth;
function siteInit() {
    wWidth = window.innerWidth;
}
// 윈도우의 너비가 변경되면 윈도우의 너비값 다시 받기
window.addEventListener("resize", () => {
    siteInit();
    subMenu.classList.remove("active");
});

// ----nav submenu----------------------------------------
let header = document.querySelector("header");
let mainMenuGenre = document.querySelector(".main-menu .mainmenu-genre");
let subMenu = document.querySelector(".submenu-wrap");

mainMenuGenre.addEventListener("mouseenter", ()=>{
    if (wWidth > 640) {
        subMenu.classList.add("active");
    }
});
mainMenuGenre.addEventListener("mouseleave", () => {
    if (wWidth > 640) {
        subMenu.classList.remove("active");
    }
});

// ----gnb usermenu----------------------------------------
let profileMenu = document.querySelector(".profile-submenu");
let gnbProfile = document.querySelector(".gnb-profile");

gnbProfile.addEventListener("click", ()=>{
    // 서브메뉴가 보이는지 체크하기
    if (wWidth > 640) {
        let isOpen = profileMenu.style.height && profileMenu.style.height !== "0px";
        if (isOpen) {
            profileMenu.style.height = 0;
        } else {
            let profileHeight = profileMenu.scrollHeight;
            profileMenu.style.height = profileHeight + "px";
        }
    }
});

