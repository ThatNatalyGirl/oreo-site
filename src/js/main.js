console.log(`Eat More Oreos`)

//Showing Navigation on Air Balloon
var navItem = document.querySelectorAll("header nav ul a");
var nav = document.querySelector("nav");
var ladder = document.querySelector(".ladder")

navItem.forEach(function(element){
		element.style.color = "transparent";	
	});
ladder.style.display = "none";

nav.addEventListener("mouseover", function(){
	navItem.forEach(function(element){
		element.style.color = "#fff";	
	});
	ladder.style.display = "block";
});

nav.addEventListener("mouseout", function(){
	navItem.forEach(function(element){
		element.style.color = "transparent";	
	});
	ladder.style.display = "none";
});

(function () {
	var controller = new ScrollMagic.Controller({reverse:true, offset: '0px'});
  
	new ScrollMagic.Scene({triggerElement: ".videoSect"})
		.setClassToggle(".logo", "is-smaller") // add class toggle
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".game2Sect"})
		.setClassToggle(".logo", "is-dunking") // add class toggle
		.addTo(controller);
})();