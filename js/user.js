// 프로필관리 연령설정 아코디언
let ageWrap = document.querySelectorAll(".age-wrap");
let ageWrapA = document.querySelectorAll(".age-wrap>a");
let profileAge = document.querySelectorAll(".profile-age");
let ageWrapArrow = document.querySelectorAll(".age-wrap>a");

ageWrap.forEach((age, id)=>{
    age.addEventListener("click", (e)=>{
        e.preventDefault();
        let isOpen = profileAge[id].style.height && profileAge[id].style.height !== "0px";
        if(!isOpen){
            let ageHeight = profileAge[id].scrollHeight;
            profileAge[id].style.height = ageHeight + "px";
            ageWrapArrow[id].classList.add("active");
        }else{
            let ageA = profileAge[id].querySelectorAll("li>a");
            ageA.forEach(aa => {
                aa.addEventListener("click", (e) => {
                    e.preventDefault();//a의 기본 이벤트 막기
                    ageWrapA[id].innerText = aa.innerText;
                });
            });
            profileAge[id].style.height = 0;
            ageWrapArrow[id].classList.remove("active");
        }
    });

    profileAge[id].addEventListener("mouseleave", ()=>{
        profileAge[id].style.height = 0;
        ageWrapArrow[id].classList.remove("active");
    });
});
