// header불러오기
fetch("./page/header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;

        // ================검색창================
        let searchBtn = document.querySelector(".search-btn");
        let searchTab = document.querySelector(".search-wrap");
        let searchCloseBtn = searchTab.querySelector(".search-close-btn");
        searchBtn.addEventListener("click", e => {
            e.preventDefault();//a의 기본 이벤트 막기
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

        // ----nav submenu----------------------------------------
        let mainMenuGenre = document.querySelector(".main-menu .mainmenu-genre");
        let subMenu = document.querySelector(".submenu-wrap");

        mainMenuGenre.addEventListener("mouseenter", () => {
            console.log(wWidth);
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

        gnbProfile.addEventListener("click", (e) => {
            e.preventDefault();//a의 기본 이벤트 막기
            // 서브메뉴가 보이는지 체크하기
            let isOpen = profileMenu.style.height && profileMenu.style.height !== "0px";
            if (isOpen) {
                profileMenu.style.height = 0;
            } else {
                let profileHeight = profileMenu.scrollHeight;
                profileMenu.style.height = profileHeight + "px";
            }
        });

        gnbProfile.addEventListener("mouseleave", () => {
            profileMenu.style.height = 0;
        });

    });

// footer불러오기
fetch("./page/footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data;

        // ----footer lang선택----------------------------------------
        // .lang-wrap click event 
        let langWrap = document.querySelector(".lang-wrap>a");
        let lang = document.querySelector(".lang");
        let langA = document.querySelectorAll(".lang>li a");
        let langWrapA = document.querySelector(".lang-wrap>a span");

        function langToggle() {//lang active클래스 붙이는 공통함수
            lang.classList.toggle('active');
            langWrap.classList.toggle('active');
        }

        // .lang-wrap click event 
        langWrap.addEventListener("click", (e) => {
            e.preventDefault();//a의 기본 이벤트 막기
            langToggle();
        });

        // .lang click event
        langA.forEach((a) => {
            a.addEventListener("click", (e) => {
                e.preventDefault();//a의 기본 이벤트 막기
                langWrapA.innerText = a.innerText;
                langToggle();
            });
        });

        lang.addEventListener("mouseleave", () => {
            langWrap.classList.remove("active");
            lang.classList.remove("active");
        });

    });

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




