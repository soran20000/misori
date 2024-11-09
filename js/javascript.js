var SlidIndex = 0;

ShowSlides();

function ShowSlides(){
    var i;
    var slides = document.getElementsByClassName("slid");
    for( i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    SlidIndex++;
    if(SlidIndex > slides.length){
        SlidIndex = 1;
    }
    slides[SlidIndex -1].style.display = "block";

    setTimeout(ShowSlides,3000);

}

const carousel = document.querySelector(".section-slider");

let isDragging = false;

const dragStart = () =>{
    isDragging = true;
}

const dragging = (e) =>{
    if(isDragging) return;
    carousel.scrollLeft = e.pageX;
}


carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mousedown" , dragStart);
carousel.addEventListener("mousemove" , dragging);



/****time *****/
var countDwonDate = new Date("April 16,2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDwonDate - now;

    var days =Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    var minutes =Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds =Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


},1000);

/** off-shopping*******/
var swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 10,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }