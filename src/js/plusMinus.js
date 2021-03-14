// var picker = document.querySelector('.picker-btn');

// let color_pickers = [
// 	new ColorPickerControl({ container: picker, theme: 'dark' }),
// ];

let plusMinusFields = document.querySelectorAll('.plus-minus-field');

plusMinusFields.forEach((plusMinusField) => {
	let step = plusMinusField.dataset.step ? plusMinusField.dataset.step : 1;
	step = Number(step);
	let min = Number(plusMinusField.dataset.min);
	let max = Number(plusMinusField.dataset.max);
	let def = Number(plusMinusField.dataset.default);
	let field = plusMinusField.querySelector('input');
	let plusBtn = plusMinusField.querySelector('.plus');
	let minusBtn = plusMinusField.querySelector('.minus');

	let val = def;
	field.value = val;

	plusBtn.addEventListener('click', function (e) {
		e.preventDefault();
		val += step;
		if (val > max) val = max;
		field.value = val;
		console.log(val);
		field.dispatchEvent(new Event('change')); // CS if we have fake buttons altering the value, it doesnt dispatch normal change events, so we have to do it manually
	});
	minusBtn.addEventListener('click', function (e) {
		e.preventDefault();
		val -= step;
		if (val < min) val = min;
		field.value = val;
		console.log(val);
		field.dispatchEvent(new Event('change')); // CS if we have fake buttons altering the value, it doesnt dispatch normal change events, so we have to do it manually
	});
});
