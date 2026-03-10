let genreBtnArr = document.querySelectorAll(".genre-list li");
// console.log(genreBtnArr);

const wishContents = document.querySelectorAll(".wish-content");
console.log(wishContents);
// let arr = wishContents.filter(e => e.classList[0] == "all");
// console.log(arr);
console.log(typeof (wishContents));
console.log(wishContents[0].classList);
let wishContentsArr = Object.values(wishContents);
console.log(wishContentsArr);

let cardHoverdList = document.querySelectorAll(".card-hovered");
let cardHoveredArr = Object.values(cardHoverdList);


let originalList = document.querySelectorAll(".original");
let originalArr = Object.values(originalList);
//버튼 색상 변경
genreBtnArr.forEach((genreBtn, id, arr) => {
    // console.log(genreBtn);
    // console.log(genreBtn.classList);
    genreBtn.addEventListener("click", () => {
        // console.log(genreBtn);
        genreBtnArr.forEach(btn => {
            btn.classList.remove("active");
        })
        genreBtn.classList.add("active");
    })

})

//버튼 클릭하면 리스트 필터링
genreBtnArr.forEach((genreBtn, id, arr) => {
    genreBtn.addEventListener("click", () => {
        console.log(genreBtn.classList[0]);
        if (genreBtn.classList[0] == "all-btn") {
            let all = wishContentsArr.filter(e => e.classList[e.classList.length - 1] == "wish-content");
            console.log(all);
            wishContentsArr.forEach(e => {
                //console.log(e);
                //console.log(e.style);
                e.style.display = "block";
            });
        } else if (genreBtn.classList[0] == "movie-btn") {
            let movieArr = wishContentsArr.filter(e => e.classList[0] == "movie");
            console.log(movieArr);
            wishContentsArr.forEach(e => {
                //console.log(e);
                //console.log(e.style);
                e.style.display = "none";
            });
            movieArr.forEach(e => {
                e.style.display = "block";
            })
        } else if (genreBtn.classList[0] == "tv-btn") {
            let tvArr = wishContentsArr.filter(e => e.classList[0] == "tv");
            console.log(tvArr);
            wishContentsArr.forEach(e => {
                //console.log(e);
                //console.log(e.style);
                e.style.display = "none";
            });
            tvArr.forEach(e => {
                e.style.display = "block";
            })
        } else if (genreBtn.classList[0] == "sports-btn") {
            let sportsArr = wishContentsArr.filter(e => e.classList[0] == "sports");
            console.log(sportsArr);
            wishContentsArr.forEach(e => {
                //console.log(e);
                //console.log(e.style);
                e.style.display = "none";
            });
            sportsArr.forEach(e => {
                e.style.display = "block";
            })
        }
    })
})

//카드 호버하면 확대되게
// wishContentsArr.forEach((content, i) => {
//     content.addEventListener("mouseenter", (e) => {
//         //console.log(content);
//         content.style.transform = `scale(${1.1})`;
//         // content.style.zindex = "10000";
//         content.style.zindex = 100000;
//         cardHoveredArr[i].style.opacity = 1;
//         cardHoveredArr[i].style.visibility = "visible";

//     })
//     content.addEventListener("mouseleave", (e) => {
//         content.style.transform = `scale(${1})`;
//         content.style.zindex = 10;
//         cardHoveredArr[i].style.opacity = 0;
//         cardHoveredArr[i].style.visibility = "hidden";
//     })
// })


wishContentsArr.forEach((content, i) => {
    content.addEventListener("mouseenter", e => {
        content.style.zindex = 100;
        cardHoveredArr[i].style.opacity = 1;
        cardHoveredArr[i].style.visibility = "visible";
        cardHoveredArr[i].style.transform = `scale${1.1}`;
        originalArr[i].style.opacity = 0;
        //content.style.transform = `scale${1.3}`;
    })
    content.addEventListener("mouseleave", e => {
        content.style.zindex = 10;
        cardHoveredArr[i].style.opacity = 0;
        cardHoveredArr[i].style.visibility = "hidden";
        cardHoveredArr[i].style.transform = `scale${1}`;
        originalArr[i].style.opacity = 1;
    })
})

// ================검색창================
let searchBtn = document.querySelector(".search-btn");
let searchTab = document.querySelector(".search-wrap");
let searchCloseBtn = searchTab.querySelector(".search-close-btn");
searchBtn.addEventListener("click", e => {
    //console.log("isclicked", e);
    searchTab.style.top = 0;
    searchBtn.style.display = "none";
})
searchCloseBtn.addEventListener("click", e => {
    searchTab.style.top = `-${120}%`;
    searchBtn.style.display = "block";
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

// ----공통함수----------------------------------------
// 윈도우의 너비값 체크할 함수
let wWidth;
function siteInit() {
    wWidth = window.innerWidth;
}
siteInit();
// 윈도우의 너비가 변경되면 윈도우의 너비값 다시 받기
window.addEventListener("resize", () => {
    siteInit();
    subMenu.classList.remove("active");
});

// ----gnb usermenu----------------------------------------
let profileMenu = document.querySelector(".profile-submenu");
let gnbProfile = document.querySelector(".gnb-profile");

gnbProfile.addEventListener("click", () => {
    console.log("enter");
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

