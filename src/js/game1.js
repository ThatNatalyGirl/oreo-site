//game1
var images = document.querySelector('ul');
var arrowLeft = document.querySelector(".previous");
var arrowRight = document.querySelector(".next");

var deg = 0;

arrowLeft.onclick = function() {
    deg = deg + 36;
    images.style.transform = `rotateY(${deg}deg)`;
    console.log("left");
}
arrowRight.onclick = function() {
    deg = deg - 36;
    images.style.transform = `rotateY(${deg}deg)`;
    console.log("left");
}