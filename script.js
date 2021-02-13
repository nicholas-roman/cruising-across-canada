var name = document.getElementById("name").value;

function displayhoney() {
    document.getElementbyId("honey").innerHTML = honey;
}

function losthoney() {
    honey = honey - 1;
    displayhoney()
    document.getElementByClass("question").innerHTML = "Not quite... Try again";
}

function displayname() {
    document.getElementById("name").innerHTML = name;
}

