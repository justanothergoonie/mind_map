"use strict";

// makes a function run at a maximum frequency.
// For example, if a user rapidly clicks a button, this blocks some of the function calls to make it run, at most,
// once every *limit* milliseconds
// Source: https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

/*
	Usage:
	window.addEventListener('scroll', throttle(yourFunction, 500))
*/
var throttle = function throttle(func, limit) {
  var lastFunc;
  var lastRan;
  return function () {
    var context = this;
    var args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
//# sourceMappingURL=utils.js.map
