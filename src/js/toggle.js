let newWord = document.querySelector('.make-a-word');
let controls = document.querySelector('.controls');
let createWord = document.querySelector('.save-word');

let toggleControlsOn = function () {
	newWord.classList.toggle('hidden');
	controls.classList.toggle('showing');
	createWord.classList.toggle('showing');
};
let toggleControlsOff = function () {
	newWord.classList.toggle('showing');
	controls.classList.toggle('hidden');
	createWord.classList.toggle('hidden');
};

newWord.addEventListener('click', toggleControlsOn);

let mindMapContainer = document.querySelector('.mind-map-container');
let theXCord = document.querySelector('.the-x-cord');
let theYCord = document.querySelector('.the-y-cord');
let theWord = document.querySelector('.your-word');
let theName = document.querySelector('.your-name');
let pseudoWordInput = document.querySelector('.pseudo-word-input');
let pseudoNameInput = document.querySelector('.pseudo-name-input');

let whereTheWordGo = function () {
	let xPos = mindMapContainer.scrollLeft + window.innerWidth / 2 + 0.5;
	let yPos = mindMapContainer.scrollTop + window.innerHeight / 2 + 0.5;
	theXCord.value = xPos;
	theYCord.value = yPos;
	theWord.value = pseudoWordInput.innerText;
	theName.value = pseudoNameInput.innerText;
	console.log(theXCord.value, theYCord.value, theWord.value, theName.value);
};
mindMapContainer.addEventListener('click', whereTheWordGo);
createWord.addEventListener('click', whereTheWordGo);
createWord.addEventListener('click', toggleControlsOff);
