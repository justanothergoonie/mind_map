console.log(`mind map yo`);

// scroll to the center of the mind map
document
	.querySelector('.mind-map-container')
	.scrollTo(5000 - window.innerWidth / 2, 5000 - window.innerHeight / 2);

document
	.querySelector('.pseudo-word-input')
	.addEventListener('click', function () {
		this.select();
	});
document
	.querySelector('.pseudo-name-input')
	.addEventListener('click', function () {
		this.select();
	});

let values = document.querySelectorAll('.style-buttons');
let valuesAr = [];
let theStyle = document.querySelector('.the-true-style');

for (let v in values) {
	let indivPut = values[v];
	let indivPutValue = indivPut.value;
	console.log(indivPutValue);
	indivPut.addEventListener('click', function () {
		theStyle.value = indivPutValue;
		console.log(theStyle.value);
	});
}
