"use strict";

console.log("mind map yo"); // scroll to the center of the mind map

document.querySelector('.mind-map-container').scrollTo(5000 - window.innerWidth / 2, 5000 - window.innerHeight / 2);
document.querySelector('.pseudo-word-input').addEventListener('click', function () {
  this.select();
});
document.querySelector('.pseudo-name-input').addEventListener('click', function () {
  this.select();
});
var values = document.querySelectorAll('.style-buttons');
var valuesAr = [];
var theStyle = document.querySelector('.the-true-style');

var _loop = function _loop(v) {
  var indivPut = values[v];
  var indivPutValue = indivPut.value;
  console.log(indivPutValue);
  indivPut.addEventListener('click', function () {
    theStyle.value = indivPutValue;
    console.log(theStyle.value);
  });
};

for (var v in values) {
  _loop(v);
}
//# sourceMappingURL=main.js.map
