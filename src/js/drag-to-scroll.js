(function () {
	console.log('drag-to-scroll');
	let mindMapContainer = document.querySelector('.mind-map-container');
	let mindMap = document.querySelector('.mind-map');
	let dragging = false;
	let startX, startY, scrollX, scrollY;

	let startDrag = function (e) {
		dragging = true;
		// console.log('startDrag', e);
		startX = e.screenX;
		startY = e.screenY;
		scrollX = mindMapContainer.scrollLeft;
		scrollY = mindMapContainer.scrollTop;
		// console.log(startX, startY, scrollX, scrollY);
	};

	let doDrag = function (e) {
		if (!dragging) return;
		let distanceX = e.screenX - startX;
		let distanceY = e.screenY - startY;
		// console.log('distance travelled', distanceX, distanceY);
		mindMapContainer.scrollLeft = scrollX - distanceX;
		mindMapContainer.scrollTop = scrollY - distanceY;
	};
	let stopDrag = function (e) {
		dragging = false;
	};

	mindMap.addEventListener('mousedown', startDrag);
	window.addEventListener('mousemove', doDrag);
	window.addEventListener('mouseup', stopDrag);
})();
