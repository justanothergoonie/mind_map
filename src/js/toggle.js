let newWord = document.querySelector('.make-a-word');
let controls = document.querySelector('.controls');
let createWord = document.querySelector('.save-word');
let styleBtn = document.querySelector('.styles-button');
let styleOpts = document.querySelector('.styles');

// CS the temporary word element
let tempWord = document.querySelector('.temporary-word');

let toggleControlsOn = function () {
	newWord.classList.toggle('hidden');
	controls.classList.toggle('showing');
	createWord.classList.toggle('showing');

	// CS show the temporary word element
	tempWord.classList.toggle('showing');
};

newWord.addEventListener('click', toggleControlsOn);

let toggleStyles = function () {
	styleOpts.classList.toggle('showing');
};

// styleBtn.addEventListener('click', toggleStyles);

let mindMapContainer = document.querySelector('.mind-map-container');
let theXCord = document.querySelector('.the-x-cord');
let theYCord = document.querySelector('.the-y-cord');
let theWord = document.querySelector('.your-word');
let theName = document.querySelector('.your-name');
let pseudoWordInput = document.querySelector('.word-input');
let pseudoNameInput = document.querySelector('.name-input');
let theSize = document.querySelector('.the-size');
let theSpin = document.querySelector('.the-spin');

let whereTheWordGo = function () {
	let xPos = mindMapContainer.scrollLeft + window.innerWidth / 2 + 0.5;
	let yPos = mindMapContainer.scrollTop + window.innerHeight / 2 + 0.5;
	theXCord.value = xPos;
	theYCord.value = yPos;
	theWord.value = pseudoWordInput.innerText;
	console.log(theWord.value);
	theName.value = pseudoNameInput.innerText;
};
mindMapContainer.addEventListener('click', whereTheWordGo);
createWord.addEventListener('click', whereTheWordGo);

// CS any time any setting is changed, apply it to the temporary word
document.querySelector('.word-input').addEventListener('input', function () {
	document.querySelector('.temporary-word span').innerHTML = this.innerHTML;
});
document.querySelector('.name-input').addEventListener('input', function () {
	document.querySelector('.temporary-word sup').innerHTML = this.innerHTML;
});
document.querySelector('.the-size').addEventListener('change', function () {
	// document.querySelector('.temporary-word p').style.fontSize = this.value + 'px';
	gsap.set('.temporary-word p', { duration: 0.3, fontSize: this.value });
});
document.querySelector('.the-spin').addEventListener('change', function () {
	gsap.to('.temporary-word', { duration: 0.3, rotation: this.value });
});

document.querySelectorAll('.style-buttons').forEach(function (btn) {
	btn.addEventListener('click', function () {
		let allStyles = Array.from(document.querySelectorAll('.style-buttons')).map(function (s) {
			return s.value;
		});
		let tempWord = document.querySelector('.temporary-word');
		tempWord.classList.remove(...allStyles);
		tempWord.classList.add(this.value);
	});
});
