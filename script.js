storage = window.localStorage;
var nameinput = document.getElementById("nameinput").value;
storage.setItem("name", nameinput);
storage.setItem("honey", 5);

function displayhoney() {
    var honey = storage.getItem("honey");
    document.getElementById("honey").innerHTML = honey;
}

function losehoney() {
    var honey = storage.getItem("honey");
    honey = honey - 1;
    storage.setItem("honey", honey);
    if (honey == 0) {
        window.location.href = "fail.html";
    }
    else {
        window.alert("Not quite... Try again!");
        displayhoney();
    }
}

function displayname() {
    var nameinput = storage.getItem("name");
    document.getElementById("name").innerHTML = nameinput;
}
