function displayhoney() {
    document.getElementbyId("honey").innerHTML = honey;
}

function losthoney() {
    honey = honey - 1;
    displayhoney()
    document.getElementByClass("question").innerHTML = "Not quite... Try again";
}

function displayname() {
    var name = document.getElementById("name").value;
    document.getElementById("name").innerHTML = name;
}

