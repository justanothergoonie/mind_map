"use strict";

(function () {
  console.log('drag-to-scroll');
  var mindMapContainer = document.querySelector('.mind-map-container');
  var mindMap = document.querySelector('.mind-map');
  var dragging = false;
  var startX, startY, scrollX, scrollY;

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
  };

  var stopDrag = function stopDrag(e) {
    dragging = false;
  };

  mindMap.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', doDrag);
  window.addEventListener('mouseup', stopDrag);
})();
//# sourceMappingURL=drag-to-scroll.js.map
