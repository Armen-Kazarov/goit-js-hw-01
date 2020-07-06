'use strict';

let message = prompt('Введите страну, в которую необходимо осуществить доставку');
let cost;

switch(message.toLowerCase()) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');

}
console.log(`Доставка в ${message.toLowerCase()} будет стоить ${cost} кредитов`);