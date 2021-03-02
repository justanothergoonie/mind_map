"use strict";

console.log("mind map yo"); // scroll to the center of the mind map

document.querySelector('.mind-map-container').scrollTo(5000 - window.innerWidth / 2, 5000 - window.innerHeight / 2);
document.querySelector('.pseudo-word-input').addEventListener('click', function () {
  this.select();
});
document.querySelector('.pseudo-name-input').addEventListener('click', function () {
  this.select();
});
//# sourceMappingURL=main.js.map
