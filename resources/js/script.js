var nav = document.querySelector('.js--main-nav');
var icon = document.querySelector(".js--nav-icon ");
var contact = document.getElementById("contact");
var aboutMe = document.getElementById("about-me");
var portfolio = document.getElementById("portfolio");

function toggleNav(){
    nav.classList.toggle("show-main-nav")
}

icon.addEventListener("click", toggleNav)

document.querySelector("ul.main-nav").addEventListener("click", toggleNav )
