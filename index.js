"use strict";

//Close one dropdown-content when the sibling is called
window.onclick = function (event) {
  let targ = event.target;
  let drp = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < drp.length; i++) {
    if (drp[i].previousElementSibling === targ) {
      drp[i].classList.toggle("show");
      drp[i].previousElementSibling.classList.toggle("active");
    } else {
      drp[i].classList.remove("show");
      drp[i].previousElementSibling.classList.remove("active");
    }
  }
};


//Adding height to MOBILE dropdown menu one
const dropdownOneHeight = document.getElementById("dropdown-one");

const heightOne = document.getElementById("dropdown_content_one");

dropdownOneHeight.addEventListener("click", function() {
  heightOne.classList.toggle("show-height");
});

//Adding height to MOBILE dropdown menu two
const dropdownTwoHeight = document.getElementById("dropdown-two");

const heightTwo = document.getElementById("dropdown_content_two");

dropdownTwoHeight.addEventListener("click", function() {
  heightTwo.classList.toggle("display-height");
});



//Adding functionality to the hamburger
const hamburger = document.getElementById("icons-menu");

const nav = document.getElementById("my-nav");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("visible");
});


//Changing the hamburger icon to X sign
function changeHamburger(x) {
  x.classList.toggle("change");
}