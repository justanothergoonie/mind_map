// scroll to the center of the mind map
(function () {
	console.log('drag-to-scroll');

	let mindMapContainer = document.querySelector('.mind-map-container');
	let mindMap = document.querySelector('.mind-map');
	let words = document.querySelectorAll('.word');

	const urlParams = new URLSearchParams(window.location.search);
	const urlX = urlParams.get('x');
	const urlY = urlParams.get('y');

	let dragging = false;
	let startX, startY, scrollX, scrollY;

	console.log('x & y from URL query get vars', urlX, urlY);

	if (urlX && urlY) {
		// if there's URL coordinates, scroll to where the URL says
		let words = document.querySelectorAll('.word');
		let lastWord = words[words.length - 1];
		mindMapContainer.scrollTo(urlX - window.innerWidth / 2, urlY - window.innerHeight / 2);
	} else if (words.length) {
		// if there are words in the system, scroll to last word
		let lastWord = words[words.length - 1];
		mindMapContainer.scrollTo(parseInt(lastWord.style.left) - window.innerWidth / 2, parseInt(lastWord.style.top) - window.innerHeight / 2);
	} else {
		// no URL, no words, just scroll to center
		mindMapContainer.scrollTo(5000 - window.innerWidth / 2, 5000 - window.innerHeight / 2);
	}

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
		throttle(updateQueryVars, 300);
	};
	let stopDrag = function (e) {
		dragging = false;
	};

	let updateQueryVars = function () {
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
