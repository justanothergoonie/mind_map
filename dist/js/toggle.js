"use strict";

var newWord = document.querySelector('.make-a-word');
var controls = document.querySelector('.controls');
var createWord = document.querySelector('.save-word');
var styleBtn = document.querySelector('.styles-button');
var styleOpts = document.querySelector('.styles');

var toggleControlsOn = function toggleControlsOn() {
  newWord.classList.toggle('hidden');
  controls.classList.toggle('showing');
  createWord.classList.toggle('showing');
};

newWord.addEventListener('click', toggleControlsOn);

var toggleStyles = function toggleStyles() {
  styleOpts.classList.toggle('showing');
};

styleBtn.addEventListener('click', toggleStyles);
var mindMapContainer = document.querySelector('.mind-map-container');
var theXCord = document.querySelector('.the-x-cord');
var theYCord = document.querySelector('.the-y-cord');
var theWord = document.querySelector('.your-word');
var theName = document.querySelector('.your-name');
var pseudoWordInput = document.querySelector('.word-input');
var pseudoNameInput = document.querySelector('.name-input');
var theSize = document.querySelector('.the-size');
var theSpin = document.querySelector('.the-spin');

var whereTheWordGo = function whereTheWordGo() {
  var xPos = mindMapContainer.scrollLeft + window.innerWidth / 2 + 0.5;
  var yPos = mindMapContainer.scrollTop + window.innerHeight / 2 + 0.5;
  theXCord.value = xPos;
  theYCord.value = yPos;
  theWord.value = pseudoWordInput.innerText;
  console.log(theWord.value);
  theName.value = pseudoNameInput.innerText;
  console.log(theXCord.value, theYCord.value, theWord.value, theName.value, theSize.value, theSpin.value);
};

mindMapContainer.addEventListener('click', whereTheWordGo);
createWord.addEventListener('click', whereTheWordGo);
//# sourceMappingURL=toggle.js.map
