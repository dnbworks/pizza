var menubtn = document.querySelector(".menu");
var sidenav = document.querySelector(".sidenav");
var closebtn = document.querySelector(".closebtn");

closebtn.addEventListener("click", function(){
    sidenav.classList.remove("shownav");
});

menubtn.addEventListener("click", function(){
    sidenav.classList.add("shownav");
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