'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let quantityDroids = prompt('How many droids do you want to buy?');

if(quantityDroids === null) {
  message = 'Отменено пользователем!';
  console.log(message);

} else {
    totalPrice = quantityDroids * pricePerDroid;
    let balance = credits - totalPrice;

    if(totalPrice>credits) {
      message = 'Недостаточно средств на счету!';
      console.log(message);
    } else {
        console.log(`Вы купили ${+quantityDroids} дроидов, на счету осталось ${balance} кредитов.`);
    }
  }