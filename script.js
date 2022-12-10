const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-mobile");
const fvideo = document.querySelector(".footer-video");

menu.addEventListener("click", function () {
    nav.style.transform = "translate(0)";
    fvideo.pause();
});

close.addEventListener("click", function () {
    nav.style.transform = "translate(-100%)";
    fvideo.play();
});
