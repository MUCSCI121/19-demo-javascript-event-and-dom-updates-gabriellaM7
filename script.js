let nextTextToDisplay = "a";


function divClicked(id){
  let divElement = document.getElementById(id);
  if (divElement.innerText == ""){
  console.log("Element set to: ", divElement innerText);
  divElement.innertext = "x"; 
  if (nextTextToDisplay == "a"){
    nextTextToDisplay = "b";
  }
  else if (nextTextToDisplay == "b"){
    
  }
  }else {
    console.log("Skipped setting the inner text");
  }
}