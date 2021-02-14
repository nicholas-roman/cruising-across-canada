storage = window.sessionStorage;

function starthoney() {
    let honey = 4;
    sessionStorage.setItem("honey", honey);
}

function displayhoney() {
    let honey = sessionStorage.getItem("honey");
    document.getElementById("honey").innerHTML = honey;
}

function losehoney() {
    let honey = sessionStorage.getItem("honey");
    honey = honey - 1;
    sessionStorage.setItem("honey", honey);
    if (honey == -1) {
        window.location.replace("fail.html");
    }
    else {
        window.alert("Not quite... Try again!");
        displayhoney();
    }
}

function resethoney() {
    let honey = 0;
    sessionStorage.setItem("honey", honey);
}
