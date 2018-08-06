"use strict";

console.log("Eat More Oreos");

//Showing Navigation on Air Balloon
var navItem = document.querySelectorAll("header nav ul a");
var nav = document.querySelector("nav");
var ladder = document.querySelector(".ladder");

navItem.forEach(function (element) {
    element.style.color = "transparent";
});
ladder.style.display = "none";

nav.addEventListener("mouseover", function () {
    navItem.forEach(function (element) {
        element.style.color = "#fff";
    });
    ladder.style.display = "block";
});

nav.addEventListener("mouseout", function () {
    navItem.forEach(function (element) {
        element.style.color = "transparent";
    });
    ladder.style.display = "none";
});

//ScrollMagic Triggers
(function () {
    var controller = new ScrollMagic.Controller({ reverse: true, offset: '0px' });

    new ScrollMagic.Scene({ triggerElement: ".videoSect" }).setClassToggle(".logo", "is-smaller") // add class toggle
    .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".game2Sect" }).setClassToggle(".logo", "is-dunking") // add class toggle
    .addTo(controller);
})();

//Flavor Oreo Tooltips
var tt1 = new TooltipFirst({
    text: 'Strawberry Shortcake',
    selector: '#shortcake'
});

var tt2 = new Tooltip({
    text: 'Golden',
    selector: '#golden'
});

var tt3 = new Tooltip({
    text: 'Peanut Butter',
    selector: '#pb'
});

var tt4 = new Tooltip({
    text: 'Red Velvet',
    selector: '#redvelvet'
});

var tt5 = new Tooltip({
    text: 'Mint Chocolate',
    selector: '#mint'
});

var tt6 = new Tooltip({
    text: 'Birthday Cake',
    selector: '#bday'
});

var tt7 = new Tooltip({
    text: 'Pumpkin Spice',
    selector: '#pspice'
});

var tt8 = new Tooltip({
    text: 'Classic',
    selector: '#orig'
});

var tt9 = new Tooltip({
    text: 'Lemon',
    selector: '#lemon'
});
//# sourceMappingURL=main.js.map
