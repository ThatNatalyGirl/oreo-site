//game1
console.log('Make me a Monster!!!')

var images = document.querySelectorAll('ul');
var arrowsLeft = document.querySelectorAll(".previous");
var arrowsRight = document.querySelectorAll(".next");


var deg = 0;

arrowsLeft.forEach(function(arrowLeft){
	arrowLeft.onclick = function() {
	deg = deg + 36;
	images.style.transform = `rotateY(${deg}deg)`;
	console.log("left");
	}
});

arrowsRight.forEach(function(arrowRight){
	arrowRight.onclick = function() {
		deg = deg - 36;
		images.style.transform = `rotateY(${deg}deg)`;
		console.log("right");
	}
});

///need to fix the images bc it's an array
