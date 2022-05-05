/*
  Author: Riley
  main script for landing page
*/



window.onscroll = function() {stickyNav()};


//how do i make this smoother?
var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop; //the distance of navbar from top of page
//function to keep navbar at top
function stickyNav() {

  if (window.pageYOffset >= sticky) { //if the page has scrolled vertically past the navbar
    navbar.classList.add("sticky")//adds class that make the navbar stay at top of page
  } else {
    navbar.classList.remove("sticky");
  }
};


//Form functions: