let newWord = document.querySelector('.make-a-word');
let controls = document.querySelector('.controls');
let createWord = document.querySelector('.save-word');
let styleBtn = document.querySelector('.styles-button');
let styleOpts = document.querySelector('.styles');

let toggleControlsOn = function () {
	newWord.classList.toggle('hidden');
	controls.classList.toggle('showing');
	createWord.classList.toggle('showing');
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
