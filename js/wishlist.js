let genreBtnArr = document.querySelectorAll(".genre-list li");
// console.log(genreBtnArr);

//wishlist 카드 영역
let wishCardsWrap = document.querySelector(".wish-list");

//data 저장 배열
let wishInfoList = [];

//선택된 장르 저장 변수
let selectedGenre = "";



//버튼 색상 변경
genreBtnArr.forEach((genreBtn, id, arr) => {
    genreBtn.addEventListener("click", () => {
        genreBtnArr.forEach(btn => {
            btn.classList.remove("active");
        })
        genreBtn.classList.add("active");
    })

})


//wishlist json 파일 불러오기
async function fetchInfo() {
    try {
        await fetch("../../data/wishlist-content-info.json")
            .then(res => res.json())
            .then(data => {
                console.log("get data : ", data);
                wishInfoList = data;
                console.log("arr : ", wishInfoList);
                //화면에 랜덤 배열로 렌더링하기..?
                let shuffledArr = wishInfoList.sort(() => Math.random() - 0.5);

                renderCards(shuffledArr);
            })
    } catch (err) {
        console.log("데이터 불러오기 실패 : ", err);
    }
}

fetchInfo();

function renderCards(arr) {
    console.log("filterContent in", arr);
    wishCardsWrap.innerHTML = "";

    arr.forEach(element => {
        console.log(element.genre);
        let li = document.createElement("li");
        li.setAttribute("class", "wish-content");
        console.log(element.imagePath)
        li.innerHTML = `
                <img src="${element.imagePath}" alt="wish1" class="original">
                 <div class="card-hovered">
                    <div class="box-top">
                        <img src="${element.imagePath}" alt="wish1">
                    </div>
                    <div class="box-bottom">
                        <div class="line1">
                            <div class="title">
                                <p>${element.title}</p>
                            </div>
                            <div class="btn-wrap">
                                <a href="#"><img src="../../images/wish-list/wish-card-btn/btn_play.png"
                                    alt="재생버튼" class="btn-play"></a>
                                <a href="#"><img src="../../images/wish-list/wish-card-btn/btn_trash.png"
                                    alt="삭제버튼" class="btn-trash"></a>
                            </div>
                        </div>
                        <div class="line2">
                            <span>${element.description}</span>
                        </div>
                    </div>
                </div> 
            `
        wishCardsWrap.append(li);

        li.addEventListener("mouseenter", () => {
            console.log("render card click in");
            console.log(li.querySelector(".card-hovered"));
            let cardHovered = li.querySelector(".card-hovered");
            cardHovered.style.opacity = 100;
            cardHovered.style.visibility = "visible";
        })


        li.addEventListener("mouseleave", () => {
            console.log("render card click out");
            console.log(li.querySelector(".card-hovered"));
            let cardHovered = li.querySelector(".card-hovered");
            cardHovered.style.opacity = 0;
            cardHovered.style.visibility = "hidden";
        })

    })

}


//장르 버튼 클릭하면 화면 리스트 필터링
genreBtnArr.forEach((genreBtn, id, arr) => {
    genreBtn.addEventListener("click", () => {
        console.log(genreBtn.classList[0]);
        selectedGenre = genreBtn.classList[0];
        console.log("selected", selectedGenre);
        //컨텐츠 필터하기
        let filteredContentArr = [];
        wishInfoList.forEach((element) => {
            if (element.genre === selectedGenre) {
                filteredContentArr.push(element);
            } else if (selectedGenre === "all") {
                filteredContentArr = wishInfoList;
            }
        })
        renderCards(filteredContentArr);
    })
})

// ================검색창================
let searchBtn = document.querySelector(".search-btn");
let searchTab = document.querySelector(".search-wrap");
let searchCloseBtn = searchTab.querySelector(".search-close-btn");
searchBtn.addEventListener("click", e => {
    //console.log("isclicked", e);
    searchTab.style.top = 0;
    // searchBtn.style.display = "none";
    searchBtn.style.opacity = `${50}%`
})
searchCloseBtn.addEventListener("click", e => {
    searchTab.style.top = `-${120}%`;
    // searchBtn.style.display = "block";
    searchBtn.style.opacity = `${100}%`
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

