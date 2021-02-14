storage = window.sessionStorage;
var nameinput = document.getElementById("nameinput").value;
var honey = 5;
sessionStorage.setItem("name", nameinput);
sessionStorage.setItem("honey", honey);

function displayhoney() {
    var honey = sessionStorage.getItem("honey");
    document.getElementById("honey").innerHTML = honey;
}

function losehoney() {
    var honey = sessionStorage.getItem("honey");
    honey--;
    sessionStorage.setItem("honey", honey);
    if (honey == 0) {
        window.location.href = "fail.html";
    }
    else {
        window.alert("Not quite... Try again!");
        displayhoney();
    }
}

function displayname() {
    var nameinput = sessionStorage.getItem("name");
    document.getElementById("name").innerHTML = nameinput;
}
