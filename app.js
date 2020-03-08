'use strict';

function getDigits(num) {
    let number = parseInt(num);

    if(isNaN(number)) {
        console.log("Вы ввели не число");
        return {};

    } else if (number < 0 || number >= 999) {
        console.log("Число не входит в диапзаон");
        return {};

    } else {
        let obj = {hundreds: 0, tens: 0, units: 0};

        if (number < 10) {
            obj.units = number;
        } else if (number >= 10 && number < 100) {
            obj.tens = Number(String(number).charAt(0));
            obj.units = Number(String(number).charAt(1));
        } else {
            obj.hundreds = Number(String(number).charAt(0));
            obj.tens = Number(String(number).charAt(1));
            obj.units = Number(String(number).charAt(2));
        }

        return obj;
    }
}

console.log(getDigits(prompt("число от 0 до 1000")));