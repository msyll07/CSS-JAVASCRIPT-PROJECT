// navbar responsiveness
const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");


searchIcon.addEventListener("click",() =>{
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");

    if (nav.classList.contains("openSearch")){
        return searchIcon.classList.replace("fa-magnifying-glass","fa-xmark");
    }
    else
        searchIcon.classList.replace("fa-xmark","fa-magnifying-glass");

})

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("fa-xmark","fa-magnifying-glass");


});

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

// navbar responsiveness
    

