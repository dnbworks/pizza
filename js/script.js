var menubtn = document.querySelector(".menu");
var sidenav = document.querySelector(".sidenav");
var closebtn = document.querySelector(".closebtn");

var nav = document.querySelector("nav");

closebtn.addEventListener("click", function(){
    sidenav.classList.remove("shownav");
});

menubtn.addEventListener("click", function(){
    sidenav.classList.add("shownav");
});


window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        nav.classList.add('fixed');
    } else{
        nav.classList.remove('fixed');
    }
});




$(document).ready(function(){
    $(".slider").slick({
        arrows:true,
        autoplay:true,
        speed:1000,
        dots:true,
        prevArrow: ".left",
        nextArrow: ".right",
        //fade:true
    });
});

class Elements {
    constructor(){
        this.nav = document.querySelector('nav');
    }
    
}

var domElements = new Elements();

console.log(domElements.nav);