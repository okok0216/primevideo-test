// 종목
let gameListSwiper = new Swiper(".sports-game-list-wrap", {
  slidesPerView: 7.5,
  slidesPerGroup: 6,
  spaceBetween: 16,
  pagination: {
    el: ".game-list-pagination"
  },
  navigation: {
    nextEl: ".game-list-button-next",
    prevEl: ".game-list-button-prev",
  }
})

// 스포츠
let spbrandSwiper = new Swiper(".sports-brand-wrap", {
  slidesPerView: 7.5,
  slidesPerGroup: 6,
  spaceBetween: 16,
  pagination: {
    el: ".spbrand-pagination"
  },
  navigation: {
    nextEl: ".spbrand-button-next",
    prevEl: ".spbrand-button-prev",
  }
})

//실시간
let liveSwiper = new Swiper(".sports-live-wrap", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 15,
  pagination: {
    el: ".live-pagination"
  },
  navigation: {
    nextEl: ".live-button-next",
    prevEl: ".live-button-prev"
  }
})

//하이라이트
let highLightSwiper = new Swiper(".highlight-list-wrap", {
  slidesPerView: 6,
  slidesPerGroup: 4,
  spaceBetween: 20,
  pagination: {
    el: ".highlight-pagination"
  },
  navigation: {
    nextEl: ".highlight-button-next",
    prevEl: ".highlight-button-prev"
  }
})

//추천영화 
let recMovieSwiper = new Swiper(".rec-movie-wrap", {
  slidesPerView: 6,
  slidesPerGroup: 4,
  spaceBetween: 20,
  pagination: {
    el: ".rec-movie-pagination"
  },
  navigation: {
    nextEl: ".rec-movie-button-next",
    prevEl: ".rec-movie-button-prev"
  }
})

//오리지널
let originalSwiper = new Swiper(".original-wrap", {
  slidesPerView: 5,
  slidesPerGroup: 6,
  spaceBetween: 30,
  pagination: {
    el: ".original-pagination"
  },
  navigation: {
    nextEl: ".original-button-next",
    prevEl: ".original-button-prev"
  }
})

//추천시리즈
let recTvSwiper = new Swiper(".rec-series-wrap", {
  slidesPerView: 6,
  slidesPerGroup: 4,
  spaceBetween: 20,
  pagination: {
    el: ".rec-series-pagination"
  },
  navigation: {
    nextEl: ".rec-series-button-next",
    prevEl: ".rec-series-button-prev"
  }
})

//
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
// console.log(slides);

slides.forEach(s => {
  s.addEventListener("mouseenter", () => {
    let video = s.children[0]
    // console.log(video);

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