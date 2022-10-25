const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

function bigImg(x) {
    x.style.height = "200x";
    x.style.width = "200px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello, Jin";
}
