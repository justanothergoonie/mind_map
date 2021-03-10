"use strict";

// var picker = document.querySelector('.picker-btn');
// let color_pickers = [
// 	new ColorPickerControl({ container: picker, theme: 'dark' }),
// ];
var plusMinusFields = document.querySelectorAll('.plus-minus-field');
plusMinusFields.forEach(function (plusMinusField) {
  var step = plusMinusField.dataset.step ? plusMinusField.dataset.step : 1;
  step = Number(step);
  var min = Number(plusMinusField.dataset.min);
  var max = Number(plusMinusField.dataset.max);
  var def = Number(plusMinusField.dataset.default);
  var field = plusMinusField.querySelector('input');
  var plusBtn = plusMinusField.querySelector('.plus');
  var minusBtn = plusMinusField.querySelector('.minus');
  var val = def;
  field.value = val;
  plusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    val += step;
    if (val > max) val = max;
    field.value = val;
    console.log(val);
  });
  minusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    val -= step;
    if (val < min) val = min;
    field.value = val;
    console.log(val);
  });
});
//# sourceMappingURL=plusMinus.js.map
