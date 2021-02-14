var nameinput = document.getElementById("nameinput").value;
var honey = 5;

function displayhoney() {
    document.getElementById("honey").innerHTML = honey;
}

function losehoney() {
    honey = honey - 1;
    if (honey == 0) {
        window.location.href = "fail.html";
    }
    else {
        window.alert("Not quite... Try again!");
        displayhoney();
    }
}

function displayname() {
    document.getElementById("name").innerHTML = nameinput;
}
