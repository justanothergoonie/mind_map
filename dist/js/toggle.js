"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var newWord = document.querySelector('.make-a-word');
var controls = document.querySelector('.controls');
var createWord = document.querySelector('.save-word');
var styleBtn = document.querySelector('.styles-button');
var styleOpts = document.querySelector('.styles'); // CS the temporary word element

var tempWord = document.querySelector('.temporary-word');

var toggleControlsOn = function toggleControlsOn() {
  newWord.classList.toggle('hidden');
  controls.classList.toggle('showing');
  createWord.classList.toggle('showing'); // CS show the temporary word element

  tempWord.classList.toggle('showing');
};

newWord.addEventListener('click', toggleControlsOn);

var toggleStyles = function toggleStyles() {
  styleOpts.classList.toggle('showing');
}; // styleBtn.addEventListener('click', toggleStyles);


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
};

mindMapContainer.addEventListener('click', whereTheWordGo);
createWord.addEventListener('click', whereTheWordGo); // CS any time any setting is changed, apply it to the temporary word

document.querySelector('.word-input').addEventListener('input', function () {
  document.querySelector('.temporary-word span').innerHTML = this.innerHTML;
});
document.querySelector('.name-input').addEventListener('input', function () {
  document.querySelector('.temporary-word sup').innerHTML = this.innerHTML;
});
document.querySelector('.the-size').addEventListener('change', function () {
  // document.querySelector('.temporary-word p').style.fontSize = this.value + 'px';
  gsap.set('.temporary-word p', {
    duration: 0.3,
    fontSize: this.value
  });
});
document.querySelector('.the-spin').addEventListener('change', function () {
  gsap.to('.temporary-word', {
    duration: 0.3,
    rotation: this.value
  });
});
document.querySelectorAll('.style-buttons').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var _tempWord$classList;

    var allStyles = Array.from(document.querySelectorAll('.style-buttons')).map(function (s) {
      return s.value;
    });
    var tempWord = document.querySelector('.temporary-word');

    (_tempWord$classList = tempWord.classList).remove.apply(_tempWord$classList, _toConsumableArray(allStyles));

    tempWord.classList.add(this.value);
  });
});
//# sourceMappingURL=toggle.js.map
