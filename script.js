let nextTextToDisplay = "x";


function divClicked(id){
  let divElement = document.getElementById(id);
  if (divElement.innerText == ""){
    divElement.innerText = nextTextToDisplay
  console.log("Element set to: ", divElement.innerText);
  divElement.innertext = "x"; 
  if (nextTextToDisplay == "x"){
    nextTextToDisplay = "o";
  }
  else if (nextTextToDisplay == "o"){
    nextTextToDisplay = "x";
    
  }
  }else {
    console.log("Skipped setting the inner text");
  }
}