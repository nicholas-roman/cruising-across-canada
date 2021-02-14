var nameinput = document.getElementById("nameinput").value;

function greet() {
  document.getElementById("nameform").style.display="none";
  return false;
}

function displayhoney() {
    document.getElementbyId("honey").innerHTML = honey;
}

function losthoney() {
    alert("Not quite... Try again!");
}

function displayname() {
    document.getElementById("name").innerHTML = nameinput;
}
