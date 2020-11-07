/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
/* if user wants to add more text, add form*/
let display_one = document.getElementById("display_one");
let display_two = document.getElementById("display_two");
let button_plus = document.getElementById("button_plus");

// prints "hi" in the browser's dev tools console


// returns a new form section if user clicks plus_button
function newForm() {
  document.getElementById("form_section").style.height = "100vh";
}
console.log("b");

var slideIndex= 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
    
  }
}

