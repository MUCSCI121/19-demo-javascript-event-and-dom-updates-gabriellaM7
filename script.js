// Use this variable to track what should be displaed in the DIV elements
let text = "Hello";

/*
  Callback function for when the user clicks on a div element.  The ID
  of the div element is passed back so we know which one we are working with.
*/
function updateDiv(id) {
    // Grab the element from the DOM by the 
  let divElement = document.getElementById(id);
  if (divElement.innerText == "") {
    divElement.innerText = text;
  }
  if (text == "Hello") {
    text = "Hola";
  } else {
    text = "Hallo";
  }
}
