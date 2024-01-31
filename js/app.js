var headerBlur     = document.querySelector(".header__blur");
var headerNav2Btn  = document.getElementById("header__nav2__btn");

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 10){
        headerBlur.classList.add('header__active');
        headerNav2Btn.classList.add('header__nav2__btn')
    }else if(scroll < 10){
        headerBlur.classList.remove('header__active');
        headerNav2Btn.classList.remove('header__nav2__btn')
    }
}


var secMnResponsive     = document.querySelector(".sec__mn__responsive");
var secMnResponsiveNav  = document.querySelector(".sec__mn__responsive__nav");
var iconMn              = document.querySelector("#icon__mn");
var iocnX               = document.querySelector("#icon__x");

iconMn.addEventListener("click", () =>{
    secMnResponsive.classList.add('mnActive');
    secMnResponsiveNav.classList.add('mnNavActive')
})

iocnX.addEventListener("click", () =>{
    secMnResponsive.classList.remove('mnActive');
    secMnResponsiveNav.classList.remove('mnNavActive')
})

var slider = document.querySelector("#sec__4__card__slider__ul");
var btnRigt = document.querySelector("#btnRigt");
var btnLeft = document.querySelector("#btnLeft");

let contedorX = 0;

btnLeft.addEventListener("click", () => {
    if(contedorX >= 75){
        contedorX = -25;
    }else{
       contedorX += 25;
       slider.style.transform = `translateX(${-contedorX}%)`;
    }
})

btnRigt.addEventListener("click", () => {
    if(contedorX <= 0){
        contedorX = 100
    }else{
      contedorX -= 25;
      slider.style.transform = `translateX(${-contedorX}%)`;
    }
})