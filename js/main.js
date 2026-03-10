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

let profileMenu = document.querySelector(".profile-submenu");
let gnbProfile = document.querySelector(".gnb-profile");

gnbProfile.addEventListener("click", () => {
    // 서브메뉴가 보이는지 체크하기
    let isOpen = profileMenu.style.height && profileMenu.style.height !== "0px";
    if (isOpen) {
        profileMenu.style.height = 0;
    } else {
        let profileHeight = profileMenu.scrollHeight;
        profileMenu.style.height = profileHeight + "px";
    }
});


//시즌별로 탭
gnbProfile.addEventListener("mouseleave", () => {
    profileMenu.style.height = 0;
});

let movieList = document.querySelector(".movie-list-wrap")
let mList = document.querySelectorAll(".movie-list>info")

movieList.addEventListener("click", () => {
    mList.classList.add("active");
})
