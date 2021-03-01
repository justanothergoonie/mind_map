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
createWord.addEventListener('click', toggleControlsOff);

let mindMapContainer = document.querySelector('.mind-map-container');
let theXCord = document.querySelector('.the-x-cord');
let theYCord = document.querySelector('.the-y-cord');

let whereTheWordGo = function () {
	let xPos = mindMapContainer.scrollLeft + window.innerWidth / 2 + 0.5;
	let yPos = mindMapContainer.scrollTop + window.innerHeight / 2 + 0.5;
	theXCord.value = xPos;
	theYCord.value = yPos;
	console.log(xPos, yPos);
};
mindMapContainer.addEventListener('click', whereTheWordGo);
