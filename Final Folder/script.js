'use strict'

const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
let curSlide = 0
let animateSlider
const maxSlide = slides.length



const formSubmit = document.getElementById('formSubmit')
const formInput = document.getElementById('forminput')
const formControl = document.querySelector('.form-control')




const goToSlide = function(slide){
    slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

goToSlide(0)

function animateRight(){
    if(curSlide === maxSlide - 1){
        curSlide = 0
    }
    else {
        curSlide++
    }
    slides.forEach(
        (s,i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    )
    
}

function startAnimation(){
    if(!animateSlider){
        animateSlider = setInterval(animateRight, 4000)
    }
}

startAnimation()


