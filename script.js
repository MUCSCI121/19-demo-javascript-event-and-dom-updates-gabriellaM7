// Use this variable to track what should be displaed in the DIV elements
let text = "Hello";

/*
  Callback function for when the user clicks on a div element.  The ID
  of the div element is passed back so we know which one we are working with.
*/
function updateDiv(id) {
    // Grab the element from the DOM by the id
  let divElement = document.getElementById(id);

  // If we haven't already set the content inside the element then go ahead and
  // set it to whatever is currently stored in the text variable
  if (divElement.innerText == "") {
    divElement.innerText = text;
  }
  if (text == "Hello") {
    text = "Hola";
  } else {
    text = "Hallo";
  }
}
