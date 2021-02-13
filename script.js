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
function losthoney(honey) {
    honey--;
    document.getElementById("honey").innerHTML = honey;
}

