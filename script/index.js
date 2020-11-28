const scroller = new Scroller;

// menu

const menu = document.querySelector(".navbar-element");
const button = document.querySelector(".burger");
const sitePart = document.querySelectorAll(".site-part");

for (let i = 0; i < sitePart.length; i++) {
    sitePart[i].addEventListener("click", () => {
        menu.classList.remove("active");
        button.classList.remove("burger-active");
    })
}

button.addEventListener("click", () => {
    menu.classList.toggle("active");
    button.classList.toggle("burger-active")
})

// text

const arrow = document.querySelector("i.fa-sort-down");
const textarea = document.querySelector(".slide-down");

function display() {
    textarea.classList.toggle("displayed");
    arrow.classList.toggle("active")
}

arrow.addEventListener("click", display);

// slider

const slide = document.querySelector(".slider");
let navbar = document.querySelector(".navbar");
let i = 0;
function setBgc() {
    if (i == 0) slide.style.backgroundImage = "url('./../images/jeden.jpg')";
    if (i == 1) slide.style.backgroundImage = "url('./../images/drugi.jpg')";
    if (i == 2) slide.style.backgroundImage = "url('./../images/trzy.jpg')";
    i++;
    if (i == 3) i = 0;
}

function changeSlide() {
    var interval = setInterval(setBgc, 5000);
}

function resize() {
    var height = window.innerHeight + navbar.offsetHeight;
    slide.style.height = height + "px";
}

window.onload = function () {
    changeSlide();
    resize();
}

window.onresize = function () {
    resize();
}