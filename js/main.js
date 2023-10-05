const sliderLine = document.getElementById("slider-line");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
var position = 0;

left.addEventListener('click', function(){
    if (position == 0) position = -1800;
    else position = position + 600;
    sliderLine.style.left = position+"px";
});

right.addEventListener('click', function(){
    if (position == -1800) position = 0;
    else position = position - 600;
    sliderLine.style.left = position+"px";
});