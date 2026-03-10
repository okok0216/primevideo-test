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
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 15,
  pagination: {
    el: ".highlight-pagination"
  },
  navigation: {
    nextEl: ".highlight-button-next",
    prevEl: ".highlight-button-prev"
  }
})