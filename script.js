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

