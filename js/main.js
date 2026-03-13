// tab-title-list>li를 저장
let tabTitles = document.querySelectorAll(".tab-title-list>li");
console.log("좀나와라", tabTitles);
// tab-content를 저장
let tabContents = document.querySelectorAll(".tab-content-wrap>div");
console.log("너도나와봐", tabContents);
//이벤틀 줄 버튼 찾기
tabTitles.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", (e) => {
        e.preventDefault()
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
            tabContents[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabContents[id].classList.add("active");
    })
})

var swiper = new Swiper(".similar-content-wrap", {
    slidesPerView: 8,
    slidesPerGroup: 8,
    pagination: {
        el: ".similar-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".similar-button-next",
        prevEl: ".similar-button-prev",
    },
});

var swiper = new Swiper(".review-wrap", {
    slidesPerView: 4.5,
    slidesPerGroup: 4,
    pagination: {
        el: ".review-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".review-button-next",
        prevEl: ".review-button-prev",
    },
});

let slides = document.querySelectorAll(".main-hero>.main-slider");
console.log(slides);

slides.forEach(s => {
    s.addEventListener("mouseenter", () => {
        let video = s.children[0]
        console.log(video);

        timer = setTimeout(() => {
            video.play();
        }, 500);

    })
    s.addEventListener("mouseleave", () => {
        let video = s.children[0];
        video.pause();
        video.currentTime = 0;
    })
})

const collectionCards = document.querySelectorAll(".collection-card");

collectionCards.forEach((card) => {
    const video = card.querySelector(".preview-video");

    card.addEventListener("mouseenter", () => {
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    });

    card.addEventListener("mouseleave", () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

//헤더 고정,배경 바꾸기
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const logoHeight = document.querySelector(".logo").offsetHeight;

    window.addEventListener("scroll", function () {
        const sPos = window.scrollY;

        if (sPos > logoHeight) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});

// 별 저장
let stars = document.querySelectorAll(".stars>span");
// 카운터를 저장할 변수
let countShow = document.querySelector(".count");
//리셋버튼
let reset = document.querySelector(".reset-count");


stars.forEach((star, id) => {
    console.log("전체별:", stars);
    console.log("별", star, id);
    star.addEventListener("click", (e) => {
        // currentTarget 이벤트를 준 대상 찾기
        console.log("클릭한별:", e.currentTarget, id);
        stars.forEach((s, i) => {
            if (i <= id) {
                s.classList.add("active")
            } else {
                s.classList.remove("active")
            }
        })
    })
})

//시즌별로 탭
let movieListWrap = document.querySelector(".movie-list-wrap");
let mList = document.querySelector(".movie-list");
let mListA = document.querySelectorAll(".movie-list>li a");
let movieListWrapA = document.querySelector(".movie-list-wrap>a");

function movieToggle() {//active클래스 붙이는 공통함수
    movieListWrapA.classList.toggle('active');
    let isOpen = mList.style.height && mList.style.height !== "0px";
    if (isOpen) {
        mList.style.height = 0;
    } else {
        let mheight = mList.scrollHeight;
        mList.style.height = mheight + "px";
    }
}

// click event 
movieListWrapA.addEventListener("click", (e) => {
    e.preventDefault();//a의 기본 이벤트 막기
    movieToggle();
});

mListA.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();//a의 기본 이벤트 막기
        movieListWrapA.innerText = a.innerText;
        movieToggle();
    });
});

mList.addEventListener("mouseleave", () => {
    movieListWrapA.classList.remove("active");
    mList.style.height = 0;
});

