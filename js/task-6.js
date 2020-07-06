'use strict';

let total = 0;
let input;

do {
  input = prompt('Please, enter some number');
  total += Number(input);

} while (Number(input));

if(input === null) {
  alert(`Общая сумма чисел равна ${total}`);
}