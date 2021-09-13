"use strict";

mathOperation(2, 3, "+");
mathOperation(2, 3, "-");
mathOperation(2, 3, "*");
mathOperation(2, 3, "/");
mathOperation(2, 3, "%");

/**
 * Математические операции с двумя аргументами
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {string} operation математические операции ("+", "-", "*", "/")
 * @returns результат операции
 */
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "+":
            return Sum(arg1, arg2);
        case "-":
            return Diff(arg1, arg2);
        case "*":
            return Mult(arg1, arg2);
        case "/":
            return Div(arg1, arg2);
        default:
            throw new Error(`Операция ${operation} не реализована!`);
    }
}
/**
 * Сложение двух чисел (a + b)
 * @param {number} a - первое слагаемое
 * @param {Number} b - второе слагаемое
 * @returns сумма
 */
function Sum(a, b) {
    return a + b;
}
/**
 * Вычитание двух чисел (a - b)
 * @param {number} a - уменьшаемое
 * @param {number} b - выситаемое
 * @returns разность
 */
function Diff(a, b) {
    return a - b;
}
/**
 * Умножение двух чисел (a * b)
 * @param {number} a - первый множитель
 * @param {number} b - второй множитель
 * @returns произведение
 */
function Mult(a, b) {
    return a * b;
}
/**
 * Деление двух чисел (a / b)
 * @param {number} a - делимое
 * @param {number} b - делитель
 * @returns частное
 */
function Div(a, b) {
    return a / b;
}

console.log(Sum(2, 3));