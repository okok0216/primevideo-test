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
