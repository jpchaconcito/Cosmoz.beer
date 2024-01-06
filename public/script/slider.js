const sliderBlond = document.getElementById('slider-blond');
const btnRightBlond = document.querySelector('#btn-right-blond');
const btnLeftBlond = document.querySelector('#btn-left-blond');
let sliderSectionBlond = document.querySelectorAll('.slider-section-blond');
let sliderSectionLastBlond = sliderSectionBlond[sliderSectionBlond.length -1];
sliderBlond.insertAdjacentElement("afterbegin", sliderSectionLastBlond);

const sliderRed = document.getElementById('slider-red');
const btnRightRed = document.querySelector('#btn-right-red');
const btnLeftRed = document.querySelector('#btn-left-red');
let sliderSectionRed = document.querySelectorAll('.slider-section-red');
let sliderSectionLastRed = sliderSectionRed[sliderSectionRed.length -1];
sliderRed.insertAdjacentElement("afterbegin", sliderSectionLastRed);

const sliderBlack = document.getElementById('slider-black');
const btnRightBlack = document.querySelector('#btn-right-black');
const btnLeftBlack = document.querySelector('#btn-left-black');
let sliderSectionBlack = document.querySelectorAll('.slider-section-black');
let sliderSectionLastBlack = sliderSectionBlack[sliderSectionBlack.length -1];
sliderBlack.insertAdjacentElement("afterbegin", sliderSectionLastBlack);

function Next(sf , slider) {
    let sliderSectionFirst = sf;
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 200);
}

btnRightBlond.addEventListener('click', function(){
    Next(document.querySelectorAll('.slider-section')[0], sliderBlond);
});

btnRightRed.addEventListener('click', function(){
    Next(document.querySelectorAll('.slider-section-red')[0], sliderRed);
});

btnRightBlack.addEventListener('click', function(){
    Next(document.querySelectorAll('.slider-section-black')[0], sliderBlack);
});

function Prev(s , slider) {
    let sliderSection = s;
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 200);
}

btnLeftBlond.addEventListener('click', function(){
    Prev(document.querySelectorAll('.slider-section'), sliderBlond);
});

btnLeftRed.addEventListener('click', function(){
    Prev(document.querySelectorAll('.slider-section-red'), sliderRed);
});

btnLeftBlack.addEventListener('click', function(){
    Prev(document.querySelectorAll('.slider-section-black'), sliderBlack);
});

setInterval(function(){
    Next(document.querySelectorAll('.slider-section')[0], sliderBlond);
    setTimeout(function(){
        Next(document.querySelectorAll('.slider-section-red')[0], sliderRed);
    }, 400);
    setTimeout(function(){
        Next(document.querySelectorAll('.slider-section-black')[0], sliderBlack);
    }, 800);
}, 8000)
