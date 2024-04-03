
function divClicked(id){
  let divElement = document.getElementById(id);
  if (divElement.innerText == ""){
  console.log("Element: ", divElement innerText);
  divElement.innertext = "x"; 
  }else {
    console.log("Skipped setting the inner text");
  }
}