"use strict";

console.log("Eat More Oreos");

//Showing Navigation on Air Balloon
var navItem = document.querySelectorAll("header nav ul a");
var nav = document.querySelector("nav");

navItem.forEach(function (element) {
	element.style.color = "transparent";
});

nav.addEventListener("mouseover", function () {
	navItem.forEach(function (element) {
		element.style.color = "#fff";
	});
});

nav.addEventListener("mouseout", function () {
	navItem.forEach(function (element) {
		element.style.color = "transparent";
	});
});
//# sourceMappingURL=main.js.map
