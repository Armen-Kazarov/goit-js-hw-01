'use strict';

const name = 'Генератор защитного поля';
let price = 1000;
let message = `Выбран \u{00AB}${name}\u{00BB}, цена за штуку ${price} кредитов`;

console.log(message);

price = 2000;
message = `Выбран \u{00AB}${name}\u{00BB}, цена за штуку ${price} кредитов`;

console.log(message);