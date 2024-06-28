/* eslint-disable linebreak-style */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
const roman = {
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};


function converter(arabicNumb, arrOfNumbs) {
    while (arabicNumb > 0) {
        for (let a in roman) {
            if (roman[a] <= arabicNumb) {
                arrOfNumbs.push(a);
                arabicNumb -= roman[a];
                break;

            }
        }
    }
}

function romanTime(time) {
    let [hours, minutes] = time.split(':');

    const romanHours = [];
    const romanMinutes = [];

    hours = Number(hours);
    minutes = Number(minutes);

    if (hours >= 24 || hours < 0 || typeof hours !== 'number') {
        throw new TypeError('Некорректный часовой формат');
    }

    if (minutes >= 60 || minutes < 0 || typeof minutes !== 'number') {
        throw new TypeError('Некорректный часовой формат');
    }

    if (hours === 0) {
        romanHours.push('N');
    }

    if (minutes === 0) {
        romanMinutes.push('N');
    }

    converter(hours, romanHours);
    converter(minutes, romanMinutes);

    return romanHours.join('') + ':' + romanMinutes.join('');
}

module.exports = romanTime;
