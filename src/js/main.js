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

let tt1 = new TooltipFirst({
    text: 'Strawberry Shortcake',
    selector: '#shortcake',
})

let tt2 = new Tooltip({
    text: 'Golden',
    selector: '#golden',
})

let tt3 = new Tooltip({
    text: 'Peanut Butter',
    selector: '#pb',
})

let tt4 = new Tooltip({
    text: 'Red Velvet',
    selector: '#redvelvet',
})

let tt5 = new Tooltip({
    text: 'Mint Chocolate',
    selector: '#mint',
})

let tt6 = new Tooltip({
    text: 'Birthday Cake',
    selector: '#bday',
})

let tt7 = new Tooltip({
    text: 'Pumpkin Spice',
    selector: '#pspice',
})

let tt8 = new Tooltip({
    text: 'Classic',
    selector: '#orig',
})

let tt9 = new Tooltip({
    text: 'Lemon',
    selector: '#lemon',
})

