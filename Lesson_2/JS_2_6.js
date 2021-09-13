"use strict";

let money = parseInt(prompt("Сколько денег вы хотите положить на счет?"));
alert(`Ваша сумма ${money} ${getCorrectWord(money)} успешно зачислена.`);

/**
 * Принимает число и возвращает слово "рубль" в правильном падеже
 * @param {number} a сумма
 * @returns слово в правильном падеже
 */
function getCorrectWord(a) {
    const b = String(a);                        // можно ли эти две строки
    const lastChar = +b.charAt(b.length - 1);   // как-то объеденить?

    if (a < 5 || a > 20) {
        if (lastChar === 1) return "рубль";
        if (lastChar > 1 && lastChar <= 4) return "рубля";
    }
    return "рублей";
}