storage = window.sessionStorage;

function starthoney() {
    var honey = 5;
    sessionStorage.setItem("honey", honey);
}

function savename() {
    var nameinput = document.getElementById("nameinput").value;
    sessionStorage.setItem("name", nameinput);
}

function displayhoney() {
    var honey = sessionStorage.getItem("honey");
    document.getElementById("honey").innerHTML = honey;
}

function losehoney() {
    var honey = sessionStorage.getItem("honey");
    honey = honey - 1;
    sessionStorage.setItem("honey", honey);
    if (honey <= 0) {
        window.location = "fail.html";
    }
    else {
        window.alert("Not quite... Try again!");
        displayhoney();
    }
}

function resethoney() {
    var honey = 0;
    sessionStorage.setItem("honey", honey);
}

function displayname() {
    var nameinput = sessionStorage.getItem("name");
    document.getElementById("name").innerHTML = nameinput;
}
