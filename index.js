const slides = document.getElementsByClassName('carousel-item');
const slideDots = document.getElementsByClassName('fa-circle');

let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function clearDots() {
    for(let dot of slideDots){
        dot.classList.remove("fas");
        dot.classList.add("far");
    }
}

function moveToNextSlide() {
    hideAllSlides();
    clearDots()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    slideDots[slidePosition].classList.add("fas");
}

function moveToPrevSlide() {
    hideAllSlides();
    clearDots()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    slideDots[slidePosition].classList.add("fas");

}