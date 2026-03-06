// tab-title-list>li를 저장
let tabTitles = document.querySelectorAll(".tab-title-list>li");
console.log("좀나와라", tabTitles);
// tab-content를 저장
let tabContents = document.querySelectorAll(".tab-content-wrap>div");
console.log("너도나와봐", tabContents);
//이벤틀 줄 버튼 찾기
tabTitles.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", () => {
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
            tabContents[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabContents[id].classList.add("active");
    })
})