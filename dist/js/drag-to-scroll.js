"use strict";

// scroll to the center of the mind map
(function () {
  console.log('drag-to-scroll');
  var mindMapContainer = document.querySelector('.mind-map-container');
  var mindMap = document.querySelector('.mind-map');
  var words = document.querySelectorAll('.word');
  var urlParams = new URLSearchParams(window.location.search);
  var urlX = urlParams.get('x');
  var urlY = urlParams.get('y');
  var dragging = false;
  var startX, startY, scrollX, scrollY;
  console.log('x & y from URL query get vars', urlX, urlY);

  if (urlX && urlY) {
    // if there's URL coordinates, scroll to where the URL says
    var _words = document.querySelectorAll('.word');

    var lastWord = _words[_words.length - 1];
    mindMapContainer.scrollTo(urlX - window.innerWidth / 2, urlY - window.innerHeight / 2);
  } else if (words.length) {
    // if there are words in the system, scroll to last word
    var _lastWord = words[words.length - 1];
    mindMapContainer.scrollTo(parseInt(_lastWord.style.left) - window.innerWidth / 2, parseInt(_lastWord.style.top) - window.innerHeight / 2);
  } else {
    // no URL, no words, just scroll to center
    mindMapContainer.scrollTo(5000 - window.innerWidth / 2, 5000 - window.innerHeight / 2);
  }

  var startDrag = function startDrag(e) {
    dragging = true; // console.log('startDrag', e);

    startX = e.screenX;
    startY = e.screenY;
    scrollX = mindMapContainer.scrollLeft;
    scrollY = mindMapContainer.scrollTop; // console.log(startX, startY, scrollX, scrollY);
  };

  var doDrag = function doDrag(e) {
    if (!dragging) return;
    var distanceX = e.screenX - startX;
    var distanceY = e.screenY - startY; // console.log('distance travelled', distanceX, distanceY);

    mindMapContainer.scrollLeft = scrollX - distanceX;
    mindMapContainer.scrollTop = scrollY - distanceY;
    throttle(updateQueryVars, 300);
  };

  var stopDrag = function stopDrag(e) {
    dragging = false;
  };

  var updateQueryVars = function updateQueryVars() {
    // console.log('throttled updateQueryVars');
    urlParams.set('x', mindMapContainer.scrollLeft + window.innerWidth / 2);
    urlParams.set('y', mindMapContainer.scrollTop + window.innerHeight / 2);
    var newRelativePathQuery = window.location.pathname + '?' + urlParams.toString();
    history.replaceState(null, '', newRelativePathQuery);
  };

  mindMap.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', doDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mouseleave', stopDrag);
  window.addEventListener('blur', stopDrag);
  mindMapContainer.addEventListener('scroll', throttle(updateQueryVars, 300));
})();
//# sourceMappingURL=drag-to-scroll.js.map
