
let button = document.getElementById("startBtn");
let outputDiv = document.getElementById("output");

    button.onclick = () => {
    outputDiv.innerHTML = ""; 

    setTimeout(() => {
        outputDiv.innerHTML += "1. Login <br>  <br>";
    }, 1000);
    
    setTimeout(() => {
        outputDiv.innerHTML += "2. New Emails <br> <br>";
    }, 2000);

    setTimeout(() => {
        outputDiv.innerHTML += "3. Meeting in 10 min<br> <br>";
    }, 3000);

    setTimeout(() => {
        outputDiv.innerHTML += "4. New Msg<br>";
    }, 4000);
};