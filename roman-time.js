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
    let cloneRomanObj = roman;
    let cloneArray = arrOfNumbs;
    while (arabicNumb > 0) {
        for (let key in roman) {
            if (cloneRomanObj[key] <= arabicNumb) {
                cloneArray.push(key);
                arabicNumb -= cloneRomanObj[key];
                break;
            }
        }
    }
}

function hourChecker(checkHours) {
    while (checkHours >= 24 || checkHours < 0 || typeof checkHours !== 'number') {
        throw new TypeError('Некорректный часовой формат');
    }
}

function minChecker(checkMins) {
    while (
        checkMins >= 60 || checkMins < 0 || typeof checkMins !== 'number') {
        throw new TypeError('Некорректный часовой формат');
    }
}

function romanTime(time) {
    let [hours, minutes] = time.split(':');

    const romanHours = [];
    const romanMinutes = [];

    hours = Number(hours);
    minutes = Number(minutes);

    hourChecker(hours);
    minChecker(minutes);

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
