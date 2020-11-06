/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
/* if user wants to add more text, add form*/
let display_one = document.getElementById("display_one");
let display_two = document.getElementById("display_two");
let form_section = document.getElementById("form_section");
let button_plus = document.getElementById("button_plus");

// prints "hi" in the browser's dev tools console
function formSection() {
  let a = form_section;
  a += 100;
}

// returns a new form section if user clicks plus_button
function newForm() {
  document.getElementById("form_section").style.height = "500vh";
}
console.log("b");

