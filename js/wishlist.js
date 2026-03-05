let genreBtnArr = document.querySelectorAll(".genre-list li>a");
console.log(genreBtnArr);

let wishContents = document.querySelectorAll(".wish-content");
console.log(wishContents);

genreBtnArr.forEach((genreBtn, id, arr) => {
    console.log(genreBtn);
    genreBtn.addEventListener("click", () => {
        console.log(genreBtn);

    })
})