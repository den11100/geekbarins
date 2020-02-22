'use strict';

// --------------------------------------------------------- task 1 ----------------------------------------------------
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c);
// ответ: 2 - Сначала a станет 2 потом присвоится с

// пример
d = b++;
alert(d);
// ответ: 1 - в d запишится 1   , потом b станет = 2

// пример 3
c = 2 + ++a;
alert(c);
// ответ: 5 - в а будет 3 потом будет сложение и 5 присвоится с

// пример 4
d = 2 + b++;
alert(d); //ответ: 4   сначала 2 + b даст 4 и присвоится d,  потом в b добавится  1
alert(a); //3
alert(b); //3


// --------------------------------------------------------- task 2 ----------------------------------------------------
// let a = 2;
// let x = 1 + (a *= 2); // ответ 4

// Скобки имеют высший приоритет сначала расчитаем (a *= 2)
// это a *= 2 можно перезаписать вот так a = a * 2  получается 4 и потом прибавляется 1



// --------------------------------------------------------- task 3 ----------------------------------------------------
// Для определения знака можно использовать Math.sign(x) Метод может вернуть одно из пяти значений: 1, -1, 0, -0 и NaN

let a = -10;
let b = 1;

a = Number(a);
b = Number(b);

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}


// --------------------------------------------------------- task 4 ----------------------------------------------------
/**
 * Сума двух чисел
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function sum(num1, num2) {
    return Number(num1) + Number(num2);
}

/**
 * Вычитание
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

/**
 * Деление
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function division(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num2 === 0) {
        throw new Error ('Нельзя делить на 0');
    }
    if (num1 === NaN || num2 === NaN) {
        throw new Error ('Введите числа');
    }
    return num1 / num2;    
}

/**
 * Умножение
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
let multiply = (num1, num2) => Number(num1) * Number(num2);


// --------------------------------------------------------- task 5 ----------------------------------------------------
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum': return sum(arg1, arg2);
        case 'subtract': return subtract(arg1, arg2);
        case 'division': return division(arg1, arg2);
        case 'multiply': return multiply(arg1, arg2);
    }
}
console.log(mathOperation(10, 5, 'sum'));
console.log(mathOperation(10, 5, 'subtract'));
console.log(mathOperation(10, 5, 'division'));
console.log(mathOperation(10, 5, 'multiply'));


// --------------------------------------------------------- task 6 ----------------------------------------------------
let amount = prompt("Сколько денег, хотите положить на счёт");
let ruble = getCorrectWordRuble(amount);
alert(`Ваша сумма в ${amount} ${ruble} успешно зачислена.`);

/**
 * Получить правильную форму слова рубль
 * @param {string} amount
 * @returns {string}
 */
function getCorrectWordRuble(amount) {
    let rub = 'рублей';

    // Обрабатываем условие если число окончивается от 11 до 19
    let endNum = Number(amount.slice(-2));
    if (endNum >= 11 && endNum <= 19) {
        return rub;
    }

    let lastNumber = amount.slice(-1);
    switch (Number(lastNumber)) {
        case 1:
            rub = 'рубль';
            break;
        case 2:
        case 3:
        case 4:
            rub = 'рубля';
            break;
    }
    return rub;
}