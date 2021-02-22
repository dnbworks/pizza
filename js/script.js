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


// mapbox 

 mapboxgl.accessToken = 'pk.eyJ1IjoiZG9veW9uZyIsImEiOiJja2xnbXJ5ZzAyNHFmMnVzNjl3anNiZWo1In0.gUrQIyXrRvO7xxMxrvxYLg';



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy:true
});

function successLocation(position){
    console.log(position);
    setMaps([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
    setMaps([-0.127758, 51.507351]);
}

function setMaps(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
}



// form validation