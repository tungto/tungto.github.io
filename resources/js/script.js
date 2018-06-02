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


//get the position
// var posContact = contact.offsetTop;

// document.getElementById('toContact').onclick = function () {
//    console.log('click')
//   scrollTo(document.getElementsByTagName("header"), posContact-30, 600);   
// }
    
// function scrollTo(element, to, duration) {
//     var start = element.scrollTop,
//         change = to - start,
//         currentTime = 0,
//         increment = 20;
        
//     var animateScroll = function(){        
//         currentTime += increment;
//         var val = Math.easeInOutQuad(currentTime, start, change, duration);
//         element.scrollTop = val;
//         if(currentTime < duration) {
//             setTimeout(animateScroll, increment);
//         }
//     };
//     animateScroll();
// }

// //t = current time
// //b = start value
// //c = change in value
// //d = duration
// Math.easeInOutQuad = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
// };