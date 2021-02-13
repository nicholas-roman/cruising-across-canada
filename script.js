let honey = 3;
function greet() {
  var username = document.getElementById("username").value;
  speech(username);
  document.getElementById("greeting").innerHTML = "Hello " + username +"! Ready to start your road trip?";
  document.getElementById("nameform").style.display="none";        
  document.getElementById("button").style.display="visible";
  document.getElementById("des").style.display="none";
  document.getElementById("button").style.visibility="visible";
  return false;
}
function displayhoney() {
    document.getElementbyId("honey").innerHTML = honey;
}

function losthoney() {
    honey--;
    displayhoney()
    document.getElementByClass("question").innerHTML = "Not quite... Try again";
}

