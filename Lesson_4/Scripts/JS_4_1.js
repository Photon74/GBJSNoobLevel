"use strict";

let condition = true;
let a = null;
let num1 = {};

do {
    a = +prompt('Введите целое число от 0 до 999.');

    if (Number.isNaN(a)) {
        alert('Вы ввели не число!');
        console.log(num1);
    } else if (!Number.isInteger(a)) {
        alert('Вы ввели не целое число!');
        console.log(num1);
    } else if (a < 0 || a > 999) {
        alert('Число не в пределах допустимого диапазона!');
        console.log(num1);
    } else {
        num1 = new NumToObj(a);
        console.log(num1);
        let answer = prompt('Желаете еще число преобразовать? (1 = да)');
        condition = answer === '1' || answer === 'да' || answer === 'yes';

    }
} while (condition);

function NumToObj(num) {
    this.units = num % 10;
    this.tens = Math.floor(num % 100 / 10);
    this.hundreds = Math.floor(num / 100);
}