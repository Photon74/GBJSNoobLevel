"use strict";

let condition = true;
let a = null;
let num1 = {};

do {
    a = prompt('Введите целое число от 0 до 999.');

    if (isNaN(a) || a === '') {
        alert('Вы ввели не число!');
        console.log(num1);
    } else if (!(Math.floor(a) === +a)) {
        alert('Вы ввели не целое число!');
        console.log(num1);
    } else if (a < 0 || a > 999) {
        alert('Число не в пределах допустимого диапазона!');
        console.log(num1);
    } else {
        condition = false;
    }
} while (condition);

function NumToObj(num) {
    this.units = num % 10;
    this.tens = Math.floor(num % 100 / 10);
    this.hundreds = Math.floor(num % 1000 / 100);
}

num1 = new NumToObj(a);

console.log(num1);