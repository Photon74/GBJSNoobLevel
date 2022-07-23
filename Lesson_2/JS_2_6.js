"use strict";

const money = parseInt(prompt("Сколько денег вы хотите положить на счет?"), 10);
const wordsRub = ["рубль", "рубля", "рублей"];
alert(`Ваша сумма ${money} ${getCorrectWord(money, wordsRub)} успешно зачислена.`);

/**
 * Принимает число и массив слов - возвращает слово в правильной форме
 * @param {number} num число
 * @param {string[]} words массив слов(им.п.ед.ч., род.п.ед.ч., род.п.мн.ч.)
 * @returns слово в правильной форме
 */
function getCorrectWord(num, words) {
    if (Number.isInteger(num)){
    const a = num % 100; 
    const b = num % 10;

    if (a < 5 || a > 20) {
        if (b === 1) return words[0];
        if (b > 1 && b <= 4) return words[1];
    }}
    return words[2];
}