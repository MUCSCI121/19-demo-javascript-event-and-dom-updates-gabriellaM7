let text = "Hello";
function updateDiv(id) {
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
