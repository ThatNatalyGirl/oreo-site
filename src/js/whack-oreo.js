const holes = document.querySelectorAll('.milk');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.oreo-game');
const start = document.querySelector('.startGame');

let lastHole;
let timeUp = false;
let score = 0;

let randomTime = function(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

let randomHole = function(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

let peep = function() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

let startGame = function() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(() => timeUp = true, 10000)
}

let bonk = function(e) {
	if(!e.isTrusted) return; // cheater!
	score++;
	console.log('am i a baddie?')
	this.parentNode.classList.remove('up');
	scoreBoard.textContent = score;
}


moles.forEach(mole => mole.addEventListener('click', bonk));
start.addEventListener('click', startGame);