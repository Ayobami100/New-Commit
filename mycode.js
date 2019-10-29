// function show_rough(){
// var po = document.getElementById('tx-rough');
// po.style.display="block";
// var pol = document.getElementById('tx');
// pol.style.display="none";
// }
// function hide_rough(){
// var pol = document.getElementById('tx');
// pol.style.display="block";
// var po = document.getElementById('tx-rough');
// po.style.display="none";
// }

// Sticky navbar
// =========================
// When the user scrolls the page, execute myFunction

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
