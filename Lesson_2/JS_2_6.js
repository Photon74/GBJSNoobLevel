"use strict";

let money = parseInt(prompt("Сколько денег вы хотите положить на счет?"));
alert(`Ваша сумма ${money} ${getCorrectWord(money)} успешно зачислена.`);

/**
 * Принимает число и возвращает слово "рубль" в правильной форме
 * @param {number} num сумма
 * @returns "рубль" в правильной форме
 */
function getCorrectWord(num) {
    const a = num % 100; 
    const b = num % 10;

    if (a < 5 || a > 20) {
        if (b === 1) return "рубль";
        if (b > 1 && b <= 4) return "рубля";
    }
    return "рублей";
}