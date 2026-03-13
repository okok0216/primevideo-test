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
//--------------스포츠------------------

// 스포츠
let spbrandSwiper = new Swiper(".sport-brand-wrap", {
    slidesPerView: 8,
    slidesPerGroup: 8,
    spaceBetween: 12,
    pagination: {
        el: ".spbrand-pagination"
    },
    navigation: {
        nextEl: ".spbrand-button-next",
        prevEl: ".spbrand-button-prev",
    }
})


//스포츠이벤트
let spEventSwiper = new Swiper(".sport-event-wrap", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 16,
    pagination: {
        el: ".sport-event-pagination"
    },
    navigation: {
        nextEl: ".sport-event-button-next",
        prevEl: ".sport-event-button-prev",
    }
})


// 공개예정
let opBannerSwiper = new Swiper(".open-banner-wrap", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 16,
    pagination: {
        el: ".open-banner-pagination"
    },
    navigation: {
        nextEl: ".open-banner-button-next",
        prevEl: ".open-banner-button-prev",
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1.5,
    //         slidesPerGroup: 1.5,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //     },
    //     980: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3,
    //     },
    //     1280: {
    //         slidesPerView: 4,
    //         slidesPerGroup: 4,
    //     },
    //     1300: {
    //         slidesPerView: 5,
    //         slidesPerGroup: 5,
    //     },
    // },
})


//실시간
let liveSwiper = new Swiper(".sport-real-wrap", {
    slidesPerView: 3.5,
    slidesPerGroup: 1.5,
    spaceBetween: 15,
    pagination: {
        el: ".live-pagination"
    },
    navigation: {
        nextEl: ".live-button-next",
        prevEl: ".live-button-prev"
    }
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1.5,
    //         slidesPerGroup: 1.5,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //     },
    //     980: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3,
    //     },
    //     1280: {
    //         slidesPerView: 4,
    //         slidesPerGroup: 4,
    //     },
    //     1300: {
    //         slidesPerView: 5,
    //         slidesPerGroup: 5,
    //     },
    // },
});

// ================메인슬라이더================

const mainSwiper = new Swiper(".main-slider-wrap .swiper", {
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
    // }
});

let slides = document.querySelectorAll(".main-swiper .swiper-slide");
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

// ----영상 popup----------------------------------------
let rankListLi = document.querySelectorAll(".ranking-list li");
let rankList = document.querySelector(".ranking-list");

rankListLi.forEach((list, id) => {
    list.addEventListener("click", (e) => {
        e.preventDefault();//a의 기본 이벤트 막기

        rankListLi.forEach((l, i) => {
            l.style.transition = "none";
            if (id !== i) {
                l.classList.remove("active");
            }
            setTimeout(() => {
                l.style.transition = "0.3s";
            }, 300);
        });

        const clickedLi = e.target.closest(".swiper-slide");
        clickedLi.classList.toggle("active");

        let startTime = null;
        function syncSwiper(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;

            s.update(); // 현재 늘어나고 있는 너비에 맞춰 옆 슬라이드들 위치를 계속 재조정

            if (progress < 300) { // CSS transition 시간(400ms)과 일치시킴
                requestAnimationFrame(rankingSwiper);
            }
        }
        requestAnimationFrame(rankingSwiper);
    });
});
