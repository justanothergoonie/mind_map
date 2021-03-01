"use strict";

var newWord = document.querySelector('.make-a-word');
var controls = document.querySelector('.controls');
var createWord = document.querySelector('.save-word');

var toggleControlsOn = function toggleControlsOn() {
  newWord.classList.toggle('hidden');
  controls.classList.toggle('showing');
  createWord.classList.toggle('showing');
};

var toggleControlsOff = function toggleControlsOff() {
  newWord.classList.toggle('showing');
  controls.classList.toggle('hidden');
  createWord.classList.toggle('hidden');
};

newWord.addEventListener('click', toggleControlsOn);
createWord.addEventListener('click', toggleControlsOff);
var mindMapContainer = document.querySelector('.mind-map-container');
var theXCord = document.querySelector('.the-x-cord');
var theYCord = document.querySelector('.the-y-cord');

var whereTheWordGo = function whereTheWordGo() {
  var xPos = mindMapContainer.scrollLeft + window.innerWidth / 2 + 0.5;
  var yPos = mindMapContainer.scrollTop + window.innerHeight / 2 + 0.5;
  theXCord.value = xPos;
  theYCord.value = yPos;
  console.log(xPos, yPos);
};

mindMapContainer.addEventListener('click', whereTheWordGo);
//# sourceMappingURL=toggle.js.map