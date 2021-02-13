var nameinput = document.getElementById("nameinput").value;

function greet() {
  document.getElementById("nameform").style.display="none";
  return false;
}

function displayhoney() {
    document.getElementbyId("honey").innerHTML = honey;
}

function losthoney() {
    honey = honey - 1;
    displayhoney()
    document.getElementByClass("question").innerHTML = "Not quite... Try again";
}

function displayname() {
    document.getElementById("name").innerHTML = nameinput;
}

// When the user clicks on <div>, open the popup
function wrongAnswer() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}