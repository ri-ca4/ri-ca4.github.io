const slides = document.getElementsByClassName("project-slide");
const dots = document.getElementsByClassName("dot");

let slideIndex = 1;
showSlides(slideIndex);


function prevNext(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

    if (n > slides.length){//if next button is pressed on last slide reset to 1
        slideIndex = 1
    }
    if (n < 1) {//if prev button is pressed on first send to last
        slideIndex = slides.length
    }
        
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//set all displays to none
    }

    for (i = 0; i < dots.length; i++) {//remove active class from all dots
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";//set display for 'active' slide
    dots[slideIndex-1].className += " active";//set class for 'active' dot
} 